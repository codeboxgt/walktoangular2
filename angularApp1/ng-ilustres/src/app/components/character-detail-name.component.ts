
import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../services/character.service';
import 'rxjs/add/operator/switchMap';
import { HistoricalCharacter } from '../classes/historicalCharacter';
import { dtoData } from '../classes/data';

@Component({
    moduleId: module.id,
    selector: 'character-detail',
    templateUrl: '../templates/character-detail.component.html',
    styleUrls: ['../styles/character-detail.component.css']
})

export class CharacterDetailNameComponent{
    @Input() character:HistoricalCharacter;
    idCharacter:number;    
    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location:Location,
        private dtoData:dtoData
    ){
        //this.idCharacter = parseInt(this.dtoData.params.id);
    }

    ngOnInit(): void {
        console.log(this.dtoData.params.id);
        this.characterService.getHistoricalCharacter(this.dtoData.params.id)
            .then(character => { 
                this.character = character
            });
        // this.route.params
        //     .switchMap((params: Params) => this.characterService.getHistoricalCharacter(+params['id']))
        //     .subscribe(character => { 
        //         this.character = character
        //     });
    }

    goBack(): void {
        this.location.back();
    }
}