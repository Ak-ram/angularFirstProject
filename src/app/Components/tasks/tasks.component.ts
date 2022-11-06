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
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: true,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: true,
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: 'et porro tempora',
        completed: true,
      },
      {
        userId: 1,
        id: 5,
        title: 'laboriosam mollitia et enim quasi adipisci',
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: true,
      },
      {
        userId: 1,
        id: 7,
        title: 'illo expedita consequatur quia in',
        completed: true,
      },
    ];
    this.taskStatus = [
      { id: 0, state: 'completed' },
      { id: 1, state: 'Progress' },
      { id: 2, state: 'Failed' },
    ];
  }
  changeTaskState(id: string) {
    this.currentStateIs = +id;
  }
}
