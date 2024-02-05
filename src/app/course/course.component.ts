import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { LessonsDataSource } from '../services/lessons.datasource';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, AsyncPipe]
})
export class CourseComponent implements OnInit, AfterViewInit {
  public course: Course;
  public dataSource: LessonsDataSource;
  public displayedColumns = ['seqNo', 'description', 'duration'];
  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;
  @ViewChild('input', {static: true}) public input: ElementRef;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.dataSource = new LessonsDataSource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.paginator.pageIndex = 0;
        this.loadLessonsPage();
      });

    merge(this.sort.sortChange, this.paginator.page)
      .subscribe(() => this.loadLessonsPage());

  }

  loadLessonsPage() {
    this.dataSource.loadLessons(
      this.course.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
