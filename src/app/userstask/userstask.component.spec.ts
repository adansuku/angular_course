import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstaskComponent } from './userstask.component';

describe('UserstaskComponent', () => {
  let component: UserstaskComponent;
  let fixture: ComponentFixture<UserstaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserstaskComponent]
    });
    fixture = TestBed.createComponent(UserstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
