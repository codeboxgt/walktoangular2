import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CharacterService } from '../services/character.service';
import { HistoricalCharacter } from '../classes/historicalCharacter';

@Component({
    moduleId: module.id,
    templateUrl: '../templates/create-form.component.html',
    styles: [
        `.ng-valid[required], .ng-valid.required  {
            border-left: 5px solid #42A948; /* green */
          }

          .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
           }`
    ]
})

export class CreateCharacterComponent{
    fileToUpload: Array<File> = [];
    @Input() newHC:HistoricalCharacter= new HistoricalCharacter();

    constructor(
        private service:CharacterService,
        private router:Router
    ){}

    onSave() {
        this.service.postHistoricalCharacter(this.newHC)
            .then(response=>{
                console.log(response);
                this.router.navigate(['/characters']);
            })
    }

    onChange(fileInput: any){        
        this.fileToUpload = <Array<File>>fileInput.target.files;

        this.service.uploadAvatar(this.fileToUpload)
                    .subscribe(response => {
                        this.newHC.avatar = response.data.url
                    })
    }

}

