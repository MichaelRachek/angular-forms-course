import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {createPasswordStrengthValidator} from '../validators/password-strength.validator';
import { OnlyOneErrorPipe } from '../pipes/only-one-error.pipe';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'login',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.css'],
    standalone: true,
    imports: [MatCardModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, JsonPipe, OnlyOneErrorPipe]
})
export class LoginReactiveComponent implements OnInit {

   form = this.fb.group({
      email: ["", {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'}],
      password: ['', [Validators.required, Validators.minLength(8),
                        createPasswordStrengthValidator()]]
   });

  constructor(private fb: NonNullableFormBuilder) {


  }

  ngOnInit() {

  }

  get email() {
      return this.form.controls['email'];
  }

  get password() {
      return this.form.controls['password'];
  }

  login() {

  }

  reset() {
    this.form.reset();

    console.log(this.form.value);

  }
}












