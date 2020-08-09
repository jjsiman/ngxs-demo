import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsPageComponent } from './ngxs-page.component';

describe('NgxsPageComponent', () => {
  let component: NgxsPageComponent;
  let fixture: ComponentFixture<NgxsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
