import {Component} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'create-course-step-3',
    templateUrl: 'create-course-step-3.component.html',
    styleUrls: ['create-course-step-3.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatIconModule, MatButtonModule]
})
export class CreateCourseStep3Component {

    form = this.fb.group({
        lessons: this.fb.array([])
    });


    constructor(private fb:FormBuilder) {

    }

    get lessons() {
        return this.form.controls["lessons"] as FormArray;
    }

    addLesson() {

        const lessonForm = this.fb.group({
            title: ['', Validators.required],
            level: ['beginner', Validators.required]
        });

        this.lessons.push(lessonForm);
    }

    deleteLesson(lessonIndex: number) {
        this.lessons.removeAt(lessonIndex);
    }
}






