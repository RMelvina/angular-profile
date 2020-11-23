import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCAComponent } from './qca.component';

describe('QCAComponent', () => {
  let component: QCAComponent;
  let fixture: ComponentFixture<QCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
