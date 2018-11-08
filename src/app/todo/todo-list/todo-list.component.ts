import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../models';

@Component({
  selector: 'sample-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  items: Todo[];

  @Input()
  item: Todo;

  constructor() {
    console.log(this.items);
  }

  ngOnInit() {
    console.log(this.items);
  }

  ngOnChanges() {
    console.log(this.items);
  }
}
