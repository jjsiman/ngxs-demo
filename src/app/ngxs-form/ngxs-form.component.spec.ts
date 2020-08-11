import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsFormComponent } from './ngxs-form.component';

describe('NgxsFormComponent', () => {
  let component: NgxsFormComponent;
  let fixture: ComponentFixture<NgxsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
