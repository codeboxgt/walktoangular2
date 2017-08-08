import {Component, Input} from '@angular/core';
import { HistoricalCharacter } from '../classes/historicalCharacter';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'character-preview',
    templateUrl: '../templates/character-preview.component.html'
    
})

export class CharacterPreviewComponent {
    @Input() character:HistoricalCharacter;

    constructor(private router:Router){}

    gotoDetail() {
        this.router.navigate(['/detail', this.character.id]);
    }
}