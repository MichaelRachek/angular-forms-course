import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CreateCourseStep3Component } from './create-course-step-3/create-course-step-3.component';
import { CreateCourseStep2Component } from './create-course-step-2/create-course-step-2.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateCourseStep1Component } from './create-course-step-1/create-course-step-1.component';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    }
  ],
  standalone: true,
  imports: [MatStepperModule, CreateCourseStep1Component, MatButtonModule, CreateCourseStep2Component, CreateCourseStep3Component]
})
export class CreateCourseComponent  {
  submit(step1, step2, step3) {

    console.log(step1, step2, step3);

  }

}
