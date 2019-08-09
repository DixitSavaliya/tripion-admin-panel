import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInquiryComponent } from './trip-inquiry.component';

describe('TripInquiryComponent', () => {
  let component: TripInquiryComponent;
  let fixture: ComponentFixture<TripInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
