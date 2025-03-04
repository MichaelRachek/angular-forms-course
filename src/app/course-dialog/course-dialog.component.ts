import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { Course } from '../model/course';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogActions,
    MatButtonModule
  ]
})
export class CourseDialogComponent implements OnInit {

  public form: FormGroup;
  public description: string;
  public longDescription: string;
  public category: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {description, longDescription, category}: Course) {
    this.description = description;
    this.longDescription = longDescription;
    this.category = category;
  }
  ngOnInit() {
    this.createForm();
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
  private createForm(): void {
    this.form = this.fb.group({
      description: [this.description, Validators.required],
      category: [this.category, Validators.required],
      releasedAt: [new Date(), Validators.required],
      longDescription: [this.longDescription, Validators.required]
    });
  }
}
