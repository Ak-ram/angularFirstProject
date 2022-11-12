import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  constructor() {
       this.taskList = [
      {
        stateId: 0,
        id: 0,
        title: 'delectus aut autem',
        completed: true,
        date: 1668165487879,
      },
      {
        stateId: 0,
        id: 1,
        title: 'quis ut nam facilis et officia qui',
        completed: true,
        date: 1667765487879,
      },
      {
        stateId: 1,
        id: 2,
        title: 'fugiat veniam minus',
        completed: false,
        date: 1667965487879,
      },
      {
        stateId: 1,
        id: 3,
        title: 'et porro tempora',
        completed: false,
        date: 1668065487879,
      },
      {
        stateId: 1,
        id: 4,
        title: 'laboriosam mollitia et enim quasi adipisci',
        completed: false,
        date: 1668065487879,
      },
      {
        stateId: 0,
        id: 5,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: true,
        date: 1668065487879,
      },
      {
        stateId: 0,
        id: 6,
        title: 'illo expedita consequatur quia in',
        completed: true,
        date: 1668065487879,
      },
    ];
    this.taskStatus = [
      { id: 0, state: 'completed' },
      { id: 1, state: 'Failed' },
    ];
  }
   }

  ngOnInit(): void {
  }

}
