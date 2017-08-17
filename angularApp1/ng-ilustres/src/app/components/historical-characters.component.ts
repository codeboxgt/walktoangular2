import { Component, OnInit } from '@angular/core';

import { HistoricalCharacter } from '../classes/historicalCharacter';
import { CharacterService } from '../services/character.service'


@Component({
  moduleId: module.id,
  selector: 'my-characters',
  templateUrl: '../templates/historical-characters.component.html',
  styleUrls: ['../styles/historical-characters.component.css']
})

export class HistoricalCharactersComponent implements OnInit  {   
  characters: HistoricalCharacter[];
  selectedCharacter:HistoricalCharacter;

  constructor(private characterService:CharacterService) {}

  getHistoricalCharacters():void {
    //Promises
    /*this.characterService.getHistoricalCharacters()
        .then(characters => this.characters = characters);*/
    //Observables
    this.characterService.getHistoricalCharacters()
        .subscribe(data => this.characters = data)
  }

  onSelect(character:HistoricalCharacter){
    this.selectedCharacter = character;
  }

  ngOnInit() {
    this.getHistoricalCharacters();
  }

}

