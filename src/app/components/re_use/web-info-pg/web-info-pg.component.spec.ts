import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoPgComponent } from './web-info-pg.component';

describe('WebInfoPgComponent', () => {
  let component: WebInfoPgComponent;
  let fixture: ComponentFixture<WebInfoPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebInfoPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInfoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
