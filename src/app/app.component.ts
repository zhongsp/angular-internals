import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { Observable } from "rxjs";

import { TodosService } from './core/todos.service';
import { Todo } from './core/todo';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = 'AppComponent';
  times: number = 3;
  todo$: Observable<Todo>;
  count$: Observable<number>;

  x: number = 4;
  y: number = 2;

  @ViewChild('theContainer', { read: ViewContainerRef }) theContainer: ViewContainerRef;
  @ViewChild('theTemplate') theTemplate: TemplateRef<MyNgTemplateOutletContext>;

  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    // this.todoService.badRequest().subscribe();

    this.theContainer.createEmbeddedView(this.theTemplate, {
      x: this.x,
      y: this.y,
      print: this.print
    })
  }

  ngAfterViewInit(): void {

  }

  fetchTodo() {
    this.todo$ = this.todoService.getTodo(1);
  }

  print() {
    console.log('Print');
  }
}

interface MyNgTemplateOutletContext {
  x: number;
  y: number;
  print: ()=>{};
}
