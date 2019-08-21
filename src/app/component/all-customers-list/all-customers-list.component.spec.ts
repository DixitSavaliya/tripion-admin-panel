import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomersListComponent } from './all-customers-list.component';

describe('AllCustomersListComponent', () => {
  let component: AllCustomersListComponent;
  let fixture: ComponentFixture<AllCustomersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCustomersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
