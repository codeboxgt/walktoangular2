import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    templateUrl: '../templates/not-found.component.html'
})

export class NotFoundComponent{

    constructor(
        private location: Location
    ){}

    goBack() {
        this.location.back();
    }
}