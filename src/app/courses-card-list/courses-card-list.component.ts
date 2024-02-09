import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { take } from 'rxjs/operators';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink]
})
export class CoursesCardListComponent {

  @Input()
  public courses: Course[];

  constructor(private dialog: MatDialog) {
  }

  editCourse({description, longDescription, category}: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      description, longDescription, category
    };
    const dialogRef = this.dialog.open(CourseDialogComponent,
      dialogConfig);
    dialogRef.afterClosed().pipe(take(1)).subscribe(
      val => console.log('Dialog output:', val)
    );
  }

}









