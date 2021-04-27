import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgstyleComponent } from './ngstyle.component';

describe('NgstyleComponent', () => {
  let component: NgstyleComponent;
  let fixture: ComponentFixture<NgstyleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
