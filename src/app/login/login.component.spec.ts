import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';

describe('Component: LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: DebugElement;
  let form: NgForm;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('form'));
    form = el.references['myForm'];
  });

  it('should create form with 2 controls', () => {
    expect(form.control.get('password')).not.toBeNull();
    expect(form.control.get('email')).not.toBeNull();
  });

  // it('should mark name as invalid if empty value is submitted', () => {
  //   control('name').setValue('');
  //   expect(control('name').valid).toBeFalsy();
  // });

  // it('should mark email as invalid if pattern does not match', () => {
  //   control('email').setValue('invalid_email');
  //   expect(control('email').valid).toBeFalsy();
  // });

  function control(name: string) {
    return form.control.get(name);
  }

});
