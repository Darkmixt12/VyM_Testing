import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditoComponent } from './edit-credito.component';

describe('EditCreditoComponent', () => {
  let component: EditCreditoComponent;
  let fixture: ComponentFixture<EditCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
