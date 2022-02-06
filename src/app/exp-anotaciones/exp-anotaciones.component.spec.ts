import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAnotacionesComponent } from './exp-anotaciones.component';

describe('ExpAnotacionesComponent', () => {
  let component: ExpAnotacionesComponent;
  let fixture: ComponentFixture<ExpAnotacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAnotacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAnotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
