import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesComponent } from './states.component';
import { SinglestateComponent } from '../singlestate/singlestate.component';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesComponent,SinglestateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
