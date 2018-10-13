import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TodosService } from './todos.service';
import { Todo } from './todo';
import { API_CONFIG, ApiConfig } from './api-config';
import { HttpErrorResponse } from '@angular/common/http';

describe('TodosService', () => {
  let httpTestingController: HttpTestingController;
  const rootEndpoint = 'http://localhost';
  const MockApiConfigValue: ApiConfig = { rootEndpoint };
  const data: Todo = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };

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

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should get todo', () => {
    const todoService: TodosService = TestBed.get(TodosService);

    todoService.getTodo(1).subscribe(d => {
      expect(d).toEqual(data);
    });

    const req = httpTestingController.expectOne(`${rootEndpoint}/todos/1`);
    expect(req.request.method).toEqual('GET');

    req.flush(data);
    httpTestingController.verify();
  });

  it('should have 404 error', () => {
    const errorMsg = 'Error occurred.';
    const todoService: TodosService = TestBed.get(TodosService);

    todoService.getTodo(1).subscribe(
      d => fail('should fail with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404);
        expect(error.error).toBe(errorMsg);
      }
    );

    const req = httpTestingController.expectOne(`${rootEndpoint}/todos/1`);
    expect(req.request.method).toEqual('GET');

    req.flush(errorMsg, { status: 404, statusText: 'Not Found'});
    httpTestingController.verify();
  });

  it('should get todo with auth header', () => {
    const todoService: TodosService = TestBed.get(TodosService);

    todoService.getTodoWithAuthHeader(1).subscribe(d => {
      expect(d).toEqual(data);
    });

    const req = httpTestingController.expectOne(
      req => req.headers.has('Authorization')
    );
    expect(req.request.method).toEqual('GET');

    req.flush(data);
    httpTestingController.verify();
  });

});
