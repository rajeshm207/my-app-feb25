import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleinterestrateComponent } from './simpleinterestrate.component';

describe('SimpleinterestrateComponent', () => {
  let component: SimpleinterestrateComponent;
  let fixture: ComponentFixture<SimpleinterestrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleinterestrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleinterestrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
