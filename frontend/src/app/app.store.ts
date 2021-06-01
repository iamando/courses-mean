import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

// Reducers
import {
  coursesReducers,
  courseReducers,
} from './ngrx/reducers/course.reducers';
import { cartReducers } from './ngrx/reducers/cart.reducers';

// States
import { CoursesState, CourseState } from './ngrx/reducers/course.reducers';
import { CartState } from './ngrx/reducers/cart.reducers';

export interface State {
  courses: CoursesState;
  course: CourseState;
  cart: CartState;
}

export const reducers: ActionReducerMap<State> = {
  courses: coursesReducers,
  course: courseReducers,
  cart: cartReducers,
};

export const selectCourses = (state: State) => state.courses.courses;

export const selectCourse = (state: State) => state.course.course;

export const selectCart = (state: State) => state.cart.cartItems;

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
