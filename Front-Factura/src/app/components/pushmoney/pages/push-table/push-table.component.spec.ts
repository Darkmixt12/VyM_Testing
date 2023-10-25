import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTableComponent } from './push-table.component';

describe('PushTableComponent', () => {
  let component: PushTableComponent;
  let fixture: ComponentFixture<PushTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
