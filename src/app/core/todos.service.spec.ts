import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TodosService } from './todos.service';
import { Todo } from './todo';
import { API_CONFIG, ApiConfig } from './api-config';

describe('TodosService', () => {
  let httpTestingController: HttpTestingController;
  const MockApiConfigValue: ApiConfig = {
    rootEndpoint: 'hostname'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodosService,
        { provide: API_CONFIG, useValue: MockApiConfigValue }
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should get todo', () => {
    const data: Todo = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    const todoService: TodosService = TestBed.get(TodosService);

    todoService.getTodo(1).subscribe(d => {
      expect(d).toEqual(data);
    });

    const req = httpTestingController.expectOne('hostname/todos/1');
    req.flush(data);
    httpTestingController.verify();
  });
});
