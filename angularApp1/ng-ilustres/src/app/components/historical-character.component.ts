import { init } from 'protractor/built/launcher';
import {Component, Input, OnInit} from '@angular/core';
import { HistoricalCharacter } from '../classes/historicalCharacter';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { CharacterService } from '../services/character.service';

@Component({
    moduleId: module.id,
    selector: 'character-detail',
    templateUrl: '../templates/historical-character-detail.component.html'
    
})

export class CharacterDetailComponent implements OnInit {
    @Input() character:HistoricalCharacter;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private characterService: CharacterService
    ){}

    goBack() {
        this.location.back();
    }


    ngOnInit() {
        this.route.params
            .switchMap((params:Params) => 
            this.characterService.getHistoricalCharacter(+params['idCharacter']))
            .subscribe(character => {
                this.character = character
            })
    }
}