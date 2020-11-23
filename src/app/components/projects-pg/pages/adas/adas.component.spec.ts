import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADASComponent } from './adas.component';

describe('ADASComponent', () => {
  let component: ADASComponent;
  let fixture: ComponentFixture<ADASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
