import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sample-todo-list",
  template: `
    <h2>Todo List</h2>
    <sample-todo [datetime]="datetime" [title]="title"></sample-todo>
    <br>
    <button (click)="changeByValue()">ChangeValue</button>
    <button (click)="changeByReference()">ChangeReference</button>
    <br>
    <button (click)="changeTitle()">ChangeTitle</button>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {
  title: string = "Title";
  datetime: any = {
    timestamp: Date.now()
  };

  todoList: any[] = [
    {
      id: 1,
      title: "delectus aut autem"
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui"
    }
  ];

  constructor() {}

  ngOnInit() {}

  /**
   * Update under:
   *   ChangeDetectionStrategy.Default
   *
   * Don't update under:
   *   ChangeDetectionStrategy.OnPush
   */
  changeByValue() {
    this.datetime.timestamp = Date.now();
  }

  /**
   * Update under:
   *   ChangeDetectionStrategy.Default
   *   ChangeDetectionStrategy.OnPush
   */
  changeByReference() {
    this.datetime = {
      timestamp: Date.now()
    };
  }

  /**
   * Update under:
   *   ChangeDetectionStrategy.Default
   *   ChangeDetectionStrategy.OnPush
   */
  changeTitle() {
    this.title = "Title " + Math.random();
  }
}
