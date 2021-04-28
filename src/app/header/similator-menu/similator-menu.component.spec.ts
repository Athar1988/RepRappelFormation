import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilatorMenuComponent } from './similator-menu.component';

describe('SimilatorMenuComponent', () => {
  let component: SimilatorMenuComponent;
  let fixture: ComponentFixture<SimilatorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilatorMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilatorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
