import { routerNgProbeToken } from '@angular/router/src/router_module';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HistoricalCharacter } from '../classes/historicalCharacter';

import { CharacterService } from '../services/character.service';
import { dtoData } from '../classes/data';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '../templates/dashboard.component.html',
    styleUrls: ['../styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    characters:HistoricalCharacter[];
    constructor(private characterService: CharacterService,
                private router: Router,
                private dtoData: dtoData) {}

    replaceSpace(text:string){
        return text.split(' ').join('-');
    }

    goToDetail(character:HistoricalCharacter) {
        this.dtoData.params = {
            "id": character.id
        }
        this.router.navigate(['character/detail/'+ this.replaceSpace(character.name)])
    }

    ngOnInit() {
        //promises
        /*this.characterService.getHistoricalCharacters()
            .then(characters => this.characters = characters.slice(0,5));*/

        //Observables
        this.characterService.getHistoricalCharacters()
            .subscribe(data => {
                this.characters = data.slice(0,5);
            })
    }
}