import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoFacturaComponent } from './despacho-factura.component';

describe('DespachoFacturaComponent', () => {
  let component: DespachoFacturaComponent;
  let fixture: ComponentFixture<DespachoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespachoFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
