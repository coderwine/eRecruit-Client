import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClientComponent } from './customer-client.component';

describe('CustomerClientComponent', () => {
  let component: CustomerClientComponent;
  let fixture: ComponentFixture<CustomerClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
