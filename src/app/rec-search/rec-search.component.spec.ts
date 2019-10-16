import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSearchComponent } from './rec-search.component';

describe('RecSearchComponent', () => {
  let component: RecSearchComponent;
  let fixture: ComponentFixture<RecSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
