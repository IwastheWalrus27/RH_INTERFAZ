import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcProComponent } from './ac-pro.component';

describe('AcProComponent', () => {
  let component: AcProComponent;
  let fixture: ComponentFixture<AcProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
