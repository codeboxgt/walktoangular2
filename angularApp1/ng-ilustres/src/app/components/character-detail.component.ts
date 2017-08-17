import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../services/character.service';
import 'rxjs/add/operator/switchMap';
import { HistoricalCharacter } from '../classes/historicalCharacter';

@Component({
    moduleId: module.id,
    selector: 'character-detail',
    templateUrl: '../templates/character-detail.component.html',
    styleUrls: ['../styles/character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {
    @Input() character:HistoricalCharacter;
    
    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location:Location,
        private router:Router
    ){}

    replaceText(text:string) {
        return text.split(' ').join('-');
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.characterService.getHistoricalCharacter(+params['id']))
            .subscribe(character => { 
                this.character = character
            });
    }

    updateCharacter() {
        this.router.navigate(['/update', this.replaceText(this.character.name), this.character.id]);
    }

    goBack(): void {
        this.location.back();
    }
}