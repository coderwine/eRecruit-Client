import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecruitersComponent } from './search-recruiters.component';

describe('SearchRecruitersComponent', () => {
  let component: SearchRecruitersComponent;
  let fixture: ComponentFixture<SearchRecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
