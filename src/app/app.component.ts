import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { TodosService } from './core/todos.service';
import { Todo } from './core/todo';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'AppComponent';
  times: number = 3;
  todo$: Observable<Todo>;
  count$: Observable<number>;

  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    // this.todoService.badRequest().subscribe();
  }

  fetchTodo() {
    this.todo$ = this.todoService.getTodo(1);
  }
}
