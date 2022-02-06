import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCursosComponent } from './ac-cursos.component';

describe('AcCursosComponent', () => {
  let component: AcCursosComponent;
  let fixture: ComponentFixture<AcCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
