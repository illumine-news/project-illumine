import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialDetailComponent } from 'app/editorial-detail/editorial-detail.component';

describe('EditorialComponent', () => {
  let component: EditorialDetailComponent;
  let fixture: ComponentFixture<EditorialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
