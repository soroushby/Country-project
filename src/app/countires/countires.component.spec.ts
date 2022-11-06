import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiresComponent } from './countires.component';

describe('CountiresComponent', () => {
  let component: CountiresComponent;
  let fixture: ComponentFixture<CountiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
