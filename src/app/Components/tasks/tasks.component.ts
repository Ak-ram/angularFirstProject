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
      },
      {
        stateId: 0,
        id: 1,
        title: 'quis ut nam facilis et officia qui',
        completed: true,
      },
      {
        stateId: 1,
        id: 2,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        stateId: 1,
        id: 3,
        title: 'et porro tempora',
        completed: false,
      },
      {
        stateId: 1,
        id: 4,
        title: 'laboriosam mollitia et enim quasi adipisci',
        completed: false,
      },
      {
        stateId: 0,
        id: 5,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: true,
      },
      {
        stateId: 0,
        id: 6,
        title: 'illo expedita consequatur quia in',
        completed: true,
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
}
