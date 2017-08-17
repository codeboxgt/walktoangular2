import {Injectable} from '@angular/core'

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import {HistoricalCharacter} from '../classes/historicalCharacter';
import {CHARACTERS} from './mock-characters'

@Injectable()
export class CharacterService {
    private charactersUrl = 'http://localhost:3008';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor (private http: Http) {}

    // getHistoricalCharacters(): Promise<HistoricalCharacter[]> {
    //     let url = `${this.charactersUrl}/characters`;
    //     return this.http.get(url)
    //                .toPromise()
    //                .then(response=>response.json().data as HistoricalCharacter[])
    //                .catch(this.handleError);
    // }

    getHistoricalCharacters() {
        let url = `${this.charactersUrl}/characters`;
        return this.http.get(url)
                   .map(response => {
                        return response.json().data;
                   })
    }

    private handleError(error:any):Promise<any> {
        console.error(`Ha ocurrido un error:`);
        console.log(error);
        return Promise.reject(error.message || error);
    }

    getHistoricalCharacter(id:number):Promise<HistoricalCharacter>{
        let url = `${this.charactersUrl}/character/${id}`;

        return this.http.get(url)
                   .toPromise()
                   .then(response=>response.json().data as HistoricalCharacter)
                   .catch(this.handleError);
    }

    postHistoricalCharacter(hc:HistoricalCharacter):Promise<HistoricalCharacter> {
        let url = `${this.charactersUrl}/character`;
        return this.http.post(url, hc, {headers: this.headers})
                   .toPromise()
                   .then(response => response.json().data as HistoricalCharacter)
                   .catch(this.handleError)
    }

    putHistoricalCharacter(hc:HistoricalCharacter):Promise<HistoricalCharacter> {
        let url = `${this.charactersUrl}/update/character/${hc.id}`;
        return this.http.put(url, hc, {headers: this.headers})
                        .toPromise()
                        .then(response => response.json().data as HistoricalCharacter)
                        .catch(this.handleError);
    }

    uploadAvatar(fileToUpload:Array<File>){
        console.log(fileToUpload);
        let result:any;
        const formData: any = new FormData();
        const files:Array<File> = fileToUpload;
        formData.append("file[]", files[0], files[0]['name']);
        let url = `${this.charactersUrl}/character/upload/avatar`;
        return this.http.post(url, formData)
                        .map(response => {
                            return response.json();
                        })
    }
}