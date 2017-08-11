import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

class User {
  firstName:string;
  lastName:string;
  gender?:string;
  hikin?:boolean;
  running?:boolean;
  swimming?:boolean;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm: FormGroup;
  newUser: User;

  constructor(private fb:FormBuilder) { 
    this.reactiveForm = fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8)]) ],
      'lastName' : [null, Validators.required],
      'gender': 'Male',
      'hiking' : false,
      'running' : true,
      'swimming' : false
    })
  }

    submitForm(formValue:any) {
      debugger;
      this.newUser = formValue;
      console.log(this.newUser);
    }
  ngOnInit() {
  }

}
