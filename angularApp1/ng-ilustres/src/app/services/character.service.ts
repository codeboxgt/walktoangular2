import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CHARACTERS } from '../mocks/mock-character'

import { HistoricalCharacter } from '../classes/historicalCharacter'

@Injectable()
export class CharacterService {
    private basePath = 'http://localhost:3008';

    constructor(private http:Http){}

    private handleError(error:any):Promise<any> {
        console.error("Ha ocurrido un erro: ")
        console.log(error);
        return Promise.reject(error.message || error);
    }
    
    // getHistoricalCharacters() {
    //     let url = `${this.basePath}/characters`;
    //     return this.http.get(url)
    //                .map(response => {
    //                    return response.json().data;
    //                })
    // }

    getHistoricalCharacters():Promise<HistoricalCharacter[]> {
        let url = `${this.basePath}/characters`;

        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as HistoricalCharacter[])
                   .catch(this.handleError);
    }
    /*getHistoricalCharacters(): Promise<HistoricalCharacter[]> {
        return Promise.resolve(CHARACTERS);
    }*/

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