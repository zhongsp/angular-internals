import { Injectable, Optional } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { TodosConfigService } from "./todos-config.service";
import { Todo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly defaultRootEndpoint: string =
    'https://jsonplaceholder.typicode.com';

  private rootEndpoint: string;

  constructor(
    @Optional() config: TodosConfigService,
    private http: HttpClient
  ) {
    this.rootEndpoint = config.rootEndpoint || this.defaultRootEndpoint;
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.rootEndpoint}/todos/${id}`);
  }
}
