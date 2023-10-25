import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasDespachoComponent } from './facturas-despacho.component';

describe('FacturasDespachoComponent', () => {
  let component: FacturasDespachoComponent;
  let fixture: ComponentFixture<FacturasDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasDespachoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
