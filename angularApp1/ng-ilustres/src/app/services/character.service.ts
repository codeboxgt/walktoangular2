import { Injectable } from '@angular/core';
import { CHARACTERS } from '../mocks/mock-character'

import { HistoricalCharacter } from '../classes/historicalCharacter'

@Injectable()
export class CharacterService {

    getHistoricalCharacters(): Promise<HistoricalCharacter[]> {
        return Promise.resolve(CHARACTERS);
    }

    getHistoricalCharacter(id:number):Promise<HistoricalCharacter> {
        return this.getHistoricalCharacters()
                   .then(characters=>characters.find(character=>character.id === id));
    }

    getSlowlyCharacter(): Promise<HistoricalCharacter[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHistoricalCharacters()), 3000);
        })
    }

}