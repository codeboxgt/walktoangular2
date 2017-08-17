import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { HistoricalCharacter } from '../classes/historicalCharacter'

@Component({
    moduleId: module.id,
    selector: 'character-preview',
    templateUrl: '../templates/character-preview.component.html'
})

export class CharacterPreviewComponent {
    @Input() character:HistoricalCharacter;
    constructor(private router:Router){}

    onSelect(character:HistoricalCharacter){
        this.character = character;
    }

    gotoDetail(){
        this.router.navigate(['/detail',this.character.id]);
    }
}