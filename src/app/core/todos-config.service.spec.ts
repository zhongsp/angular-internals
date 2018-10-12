import { TestBed, inject } from '@angular/core/testing';

import { TodosConfigService } from './todos-config.service';

describe('TodosConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosConfigService]
    });
  });

  it('should be created', inject([TodosConfigService], (service: TodosConfigService) => {
    expect(service).toBeTruthy();
  }));
});
