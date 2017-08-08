import { Component, OnInit } from '@angular/core'

import { HistoricalCharacter } from '../classes/historicalCharacter';
import { CharacterService } from '../services/character.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '../templates/dashboard.component.html',
    styleUrls: ['../styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    characters:HistoricalCharacter[];
    constructor(
        private characterService:CharacterService
    ){}

    ngOnInit() {
        this.characterService.getHistoricalCharacters()
            .then(data => {
                this.characters = data.slice(0,5);
            })
    }
}