import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { OnlyOneErrorPipe } from '../pipes/only-one-error.pipe';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PasswordStrengthDirective } from '../directives/password-strength.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [
      MatCardModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      PasswordStrengthDirective,
      MatButtonModule,
      JsonPipe,
      OnlyOneErrorPipe
    ]
})
export class LoginComponent {

  public val = {
    email: "hello@gmail.com",
    password: "123456"
  };

    login(loginForm: NgForm, submit) {
        console.log(loginForm.value, loginForm.valid, submit);
        console.log("val", this.val);
    }

}
