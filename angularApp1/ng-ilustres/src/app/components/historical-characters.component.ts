import { Component, OnInit } from '@angular/core'

import { HistoricalCharacter } from '../classes/historicalCharacter';
import { CharacterService } from '../services/character.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '../templates/historical-characters.component.html',
    styleUrls: ['../styles/historical-characters.component.css']
})

export class HistoricalCharactersComponent implements OnInit {
    title = "Personajes Históricos";
    selectedCharacter:HistoricalCharacter;
    characters:HistoricalCharacter[];
    constructor(private service: CharacterService) {}

    onSelect(character:HistoricalCharacter){
        this.selectedCharacter = character;
    }

    ngOnInit() {
        this.service.getHistoricalCharacters()
            .then( response => {
                this.characters = response
            }).catch(error => console.log(error));
    }
}