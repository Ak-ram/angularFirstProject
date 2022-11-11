import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/Models/itask';
import { ITaskStatus } from 'src/app/Models/itaskStatus';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  ngOnInit(): void {}
  taskList: ITask[];
  taskStatus: ITaskStatus[];
  currentStateIs: number = 0;
  constructor() {
    this.taskList = [
      {
        stateId: 0,
        id: 0,
        title: 'delectus aut autem',
        completed: true,
        date: 1652121212121,
      },
      {
        stateId: 0,
        id: 1,
        title: 'quis ut nam facilis et officia qui',
        completed: true,
        date: 1651119047143,
      },
      {
        stateId: 1,
        id: 2,
        title: 'fugiat veniam minus',
        completed: false,
        date: 1651219047143,
      },
      {
        stateId: 1,
        id: 3,
        title: 'et porro tempora',
        completed: false,
        date: 1652119047143,
      },
      {
        stateId: 1,
        id: 4,
        title: 'laboriosam mollitia et enim quasi adipisci',
        completed: false,
        date: 1652129047000,
      },
      {
        stateId: 0,
        id: 5,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: true,
        date: 1650100047143,
      },
      {
        stateId: 0,
        id: 6,
        title: 'illo expedita consequatur quia in',
        completed: true,
        date: 1651319047143,
      },
    ];
    this.taskStatus = [
      { id: 0, state: 'completed' },
      { id: 1, state: 'Failed' },
    ];
  }
  changeTaskState(id: string) {
    this.currentStateIs = +id;
  }
  switch() {
    let current = Boolean(!this.currentStateIs);
    this.currentStateIs = +current;
  }
}
