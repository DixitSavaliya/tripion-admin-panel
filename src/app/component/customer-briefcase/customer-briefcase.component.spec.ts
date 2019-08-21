import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBriefcaseComponent } from './customer-briefcase.component';

describe('CustomerBriefcaseComponent', () => {
  let component: CustomerBriefcaseComponent;
  let fixture: ComponentFixture<CustomerBriefcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBriefcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
