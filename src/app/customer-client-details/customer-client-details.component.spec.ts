import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClientDetailsComponent } from './customer-client-details.component';

describe('CustomerClientDetailsComponent', () => {
  let component: CustomerClientDetailsComponent;
  let fixture: ComponentFixture<CustomerClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
