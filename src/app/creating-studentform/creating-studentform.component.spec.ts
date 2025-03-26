import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingStudentformComponent } from './creating-studentform.component';

describe('CreatingStudentformComponent', () => {
  let component: CreatingStudentformComponent;
  let fixture: ComponentFixture<CreatingStudentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingStudentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingStudentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
