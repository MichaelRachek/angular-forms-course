import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {createPromoRangeValidator} from '../../validators/date-range.validator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileUploadComponent } from '../../file-upload/file-upload.component';
import { MatRadioModule } from '@angular/material/radio';


@Component({
    selector: 'create-course-step-2',
    templateUrl: 'create-course-step-2.component.html',
    styleUrls: ['create-course-step-2.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatRadioModule, FileUploadComponent, MatFormFieldModule, MatInputModule, MatDatepickerModule]
})
export class CreateCourseStep2Component implements OnInit {

    form = this.fb.group({
        courseType: ['premium', Validators.required],
        price: [null, [
            Validators.required,
            Validators.min(1),
            Validators.max(9999),
            Validators.pattern("[0-9]+")
        ]],
        thumbnail: [null],
        promoStartAt: [null],
        promoEndAt: [null]
    }, {
        validators: [createPromoRangeValidator()]
    });

    constructor(private fb: FormBuilder) {

    }

  ngOnInit() {

        this.form.valueChanges
            .subscribe(val => {

                const priceControl = this.form.controls["price"];

                if (val.courseType == 'free' && priceControl.enabled) {
                    priceControl.disable({emitEvent: false});
                }
                else if (val.courseType == 'premium' && priceControl.disabled) {
                    priceControl.enable({emitEvent:false});
                }

            });



  }

}
