import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListSummaryComponent } from './article-list-summary.component';

describe('ArticleListSummaryComponent', () => {
  let component: ArticleListSummaryComponent;
  let fixture: ComponentFixture<ArticleListSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
