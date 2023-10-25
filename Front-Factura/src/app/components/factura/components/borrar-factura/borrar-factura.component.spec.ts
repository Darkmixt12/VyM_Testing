import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarFacturaComponent } from './borrar-factura.component';

describe('BorrarFacturaComponent', () => {
  let component: BorrarFacturaComponent;
  let fixture: ComponentFixture<BorrarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
