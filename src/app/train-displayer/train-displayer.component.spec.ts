import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDisplayerComponent } from './train-displayer.component';

describe('TrainDisplayerComponent', () => {
  let component: TrainDisplayerComponent;
  let fixture: ComponentFixture<TrainDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
