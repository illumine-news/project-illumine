import { TestBed } from '@angular/core/testing';

import { ArticleService } from 'app/services/article.service';

describe('ArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });
});
