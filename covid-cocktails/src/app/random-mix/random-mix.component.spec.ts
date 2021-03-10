import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMixComponent } from './random-mix.component';

describe('RandomMixComponent', () => {
  let component: RandomMixComponent;
  let fixture: ComponentFixture<RandomMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
