import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPgComponent } from './projects-pg.component';

describe('ProjectsPgComponent', () => {
  let component: ProjectsPgComponent;
  let fixture: ComponentFixture<ProjectsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
