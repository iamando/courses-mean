import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

// Actions
import { AddToCart, CartActionTypes } from '../actions/cart.actions';
import { GetCourse } from '../actions/course.actions';

// Services
import { CoursesService } from '../../services/courses.service';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActionTypes.AddToCart),
      map((action: AddToCart) => action.payload),
      mergeMap((courseId) =>
        this.courseService.getCourse(courseId).pipe(
          map((course) => ({
            type: CartActionTypes.AddToCart,
            payload: course,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CoursesService
  ) {}
}
