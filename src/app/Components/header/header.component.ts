import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  logo = 'Ango'; // this is fine, if there is non related properties otherwise you can use class that holds all related properties instead
  ngOnInit(): void {}
}
