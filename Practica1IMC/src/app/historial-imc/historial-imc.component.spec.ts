import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialIMCComponent } from './historial-imc.component';

describe('HistorialIMCComponent', () => {
  let component: HistorialIMCComponent;
  let fixture: ComponentFixture<HistorialIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialIMCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
