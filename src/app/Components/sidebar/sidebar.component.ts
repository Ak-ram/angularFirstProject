import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarLinks: string[] = ['Main', 'About', 'Project List'];
  constructor() {}
  ngOnInit(): void {}
}
