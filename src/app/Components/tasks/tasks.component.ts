import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/Models/itask';
import { ITaskStatus } from 'src/app/Models/itaskStatus';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  taskList: ITask[];
  taskStatus: ITaskStatus[];
  currentStateIs: number = 0;
  constructor() {
 
  changeTaskState(id: string) {
    this.currentStateIs = +id;
  }
  switch() {
    let current = Boolean(!this.currentStateIs);
    this.currentStateIs = +current;
  }
}
