import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoValidacaoComponent } from './etapa-atual.component';

describe('CodigoValidacaoComponent', () => {
  let component: CodigoValidacaoComponent;
  let fixture: ComponentFixture<CodigoValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoValidacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
