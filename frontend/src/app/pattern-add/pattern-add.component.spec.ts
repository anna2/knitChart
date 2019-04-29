import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternAddComponent } from './pattern-add.component';

describe('PatternAddComponent', () => {
  let component: PatternAddComponent;
  let fixture: ComponentFixture<PatternAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
