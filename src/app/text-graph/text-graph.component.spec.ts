import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGraphComponent } from './text-graph.component';

describe('TextGraphComponent', () => {
  let component: TextGraphComponent;
  let fixture: ComponentFixture<TextGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
