import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG, ApiConfig } from './api-config';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly defaultRootEndpoint: string =
    'https://jsonplaceholder.typicode.com';

  private rootEndpoint: string;

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private config: ApiConfig
  ) {
    this.rootEndpoint = this.config.rootEndpoint || this.defaultRootEndpoint;
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.rootEndpoint}/todos/${id}`);
  }
}
