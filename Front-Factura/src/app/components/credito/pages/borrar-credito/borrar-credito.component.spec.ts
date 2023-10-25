import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCreditoComponent } from './borrar-credito.component';

describe('BorrarCreditoComponent', () => {
  let component: BorrarCreditoComponent;
  let fixture: ComponentFixture<BorrarCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
