import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmessageComponent } from './clientmessage.component';

describe('ClientmessageComponent', () => {
  let component: ClientmessageComponent;
  let fixture: ComponentFixture<ClientmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
