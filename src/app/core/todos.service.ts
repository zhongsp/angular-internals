import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG, ApiConfig } from './api-config';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  name: string = 'TodosService provided in root.';

  private readonly defaultRootEndpoint: string =
    'https://jsonplaceholder.typicode.com';

  private rootEndpoint: string;

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private config: ApiConfig
  ) {
    this.rootEndpoint = this.config.rootEndpoint || this.defaultRootEndpoint;
  }

  listTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.rootEndpoint}/todos`);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.rootEndpoint}/todos/${id}`);
  }

  getTodoWithAuthHeader(id: number): Observable<Todo> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer'
    });
    return this.http.get<Todo>(
      `${this.rootEndpoint}/todos/${id}`,
      { headers }
    );
  }

  badRequest() {
    return this.http.get(`${this.rootEndpoint}/bad-request`);
  }

}
