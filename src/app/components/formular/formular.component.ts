import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/directives/password.directive';
import { decimalsValidator } from '../../directives/decimals.directive';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit {

  passwordMinLength = 8

  passwordFieldType = 'password'


  myForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      decimals: new FormControl('',[decimalsValidator(0, 18)]),
      password: new FormControl('',[passwordValidator(this.passwordMinLength)])
    })
  }

  toggleShowPassword(){
    if(this.passwordFieldType==='password'){
      this.passwordFieldType = 'text'
    } else {
      this.passwordFieldType = 'password'
    }
  }

  onSubmit(){
    if(this.myForm) {
      console.log(this.myForm.value)
    }
  }

}
