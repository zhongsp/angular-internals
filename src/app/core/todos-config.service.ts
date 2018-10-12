import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosConfigService {
  readonly rootEndpoint: string = 'https://jsonplaceholder.typicode.com';
}
