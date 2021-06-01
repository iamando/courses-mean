import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

// Services
import { CoursesService } from '../../services/courses.service';

// Actions
import {
  CoursesActionTypes,
  CourseActionTypes,
  GetCourse,
} from '../actions/course.actions';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.GetCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => ({
            type: CoursesActionTypes.GetCoursesSuccess,
            payload: courses,
          })),
          catchError(async () => ({
            type: CoursesActionTypes.GetCoursesError,
            payload: [],
          }))
        )
      )
    )
  );

  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActionTypes.GetCourse),
      map((action: GetCourse) => action.payload),
      mergeMap((courseId) =>
        this.courseService.getCourse(courseId).pipe(
          map((course) => ({
            type: CourseActionTypes.GetCourseSuccess,
            payload: course,
          })),
          catchError(async () => ({
            type: CourseActionTypes.GetCourseError,
            payload: {},
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CoursesService
  ) {}
}
