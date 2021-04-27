import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodocomponentComponent } from './todocomponent.component';

describe('TodocomponentComponent', () => {
  let component: TodocomponentComponent;
  let fixture: ComponentFixture<TodocomponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
