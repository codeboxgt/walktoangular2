import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  showMessage = '';
  onKeyUpMessage = '';
  onKeyEnterMessage = '';
  onBlurMessage = '';
  listItems = [];

  constructor() { }

  showValue(text:string, $event) {
    $event.preventDefault();
    this.showMessage = text;
  }

  onKeyUp(text:string, $event) {
    this.onKeyUpMessage = text;
  }

  onKeyEnter(text:string, $event) {
    $event.preventDefault();
    this.onKeyEnterMessage = text;
  }
  onBlur(text:string, $event) {
    this.onBlurMessage = text;
  }

  addTodo(item:string, $event) {
    $event.preventDefault();
    this.listItems.push(item);
    $event.target.value ='';
    $event.target.focus;
  }

  ngOnInit() {
  }

}
