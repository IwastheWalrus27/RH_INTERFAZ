import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoEmpresaComponent } from './contrato-empresa.component';

describe('ContratoEmpresaComponent', () => {
  let component: ContratoEmpresaComponent;
  let fixture: ComponentFixture<ContratoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
