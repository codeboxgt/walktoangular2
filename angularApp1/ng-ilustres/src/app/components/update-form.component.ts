import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../services/character.service';
import 'rxjs/add/operator/switchMap';
import { HistoricalCharacter } from '../classes/historicalCharacter';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    moduleId: module.id,
    selector: 'app-reactive-forms',
    templateUrl: '../templates/update-form.component.html',
    styles:[
        `.ng-valid[required], .ng-valid.required  {
            border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
        }`
    ]
})

export class UpdateCharacterComponent implements OnInit {
    @Input() character:HistoricalCharacter;
    @BlockUI() blockUI: NgBlockUI;
    fileToUpload: Array<File> = [];
    updateForm: FormGroup;
    updateDataValue: {};

    constructor (
        private fb:FormBuilder,
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location:Location,
        private router:Router
    ){
        this.createForm();            
    }

    createForm() {
        this.updateForm = this.fb.group( {
            'name': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            'bio': [null],
            'avatar': [null]
        })
    }

    setValuesForm(character:HistoricalCharacter){
        this.updateForm.patchValue({
            name: character.name,
            bio: character.bio,
            avatar: character.avatar == null ? 'http://unsplash.it/200/200' : character.avatar
        })        
    }

    updateCharacter(formValue:any) {
        this.blockUI.start();
        this.character.avatar = formValue.avatar;
        this.character.name = formValue.name;
        this.character.bio = formValue.bio;

        this.characterService.putHistoricalCharacter(this.character)
            .then(response=> {
                this.blockUI.stop();
                setTimeout(()=>{
                    this.router.navigate(['/characters']);
                }, 1500)
            });

        console.log(this.character);        
    }    

    onChange(fileInput: any){
        console.log(fileInput);        
        this.fileToUpload = <Array<File>>fileInput.target.files;

        this.characterService.uploadAvatar(this.fileToUpload)
                    .subscribe(response => {
                        console.log(response.data.url)
                        // this.character.avatar = response.data.url
                        this.updateForm.patchValue({
                            avatar: response.data.url
                        }) 
                    })
    }

    ngOnInit() {
        this.blockUI.start('Cargando Informacion...');
        this.route.params
            .switchMap((params: Params) => this.characterService.getHistoricalCharacter(+params['id']))
            .subscribe(character => {                
                this.character = character
                this.setValuesForm(character);
                this.blockUI.stop();
            });
    }   

}