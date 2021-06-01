import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

// reducers
import { State } from '../../app.store';

// Actions
import { GetCourses } from '../../ngrx/actions/course.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faCartPlus = faCartPlus;
  courses: any = [];
  loading: boolean;
  courses$ = this.store
    .select((state) => state.courses)
    .subscribe(
      (res) => {
        this.courses = res.courses;
        this.loading = res.loading;
      },
      (err) => console.error(err)
    );

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCourses());
  }
}
