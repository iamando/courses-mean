import { Component, OnInit } from '@angular/core';
import { faCartPlus, faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faCartPlus = faCartPlus;
  faBookOpen = faBookOpen;

  constructor() {}

  ngOnInit(): void {}
}
