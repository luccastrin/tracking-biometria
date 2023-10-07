import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoEtapaComponent } from './conteudo-etapa.component';

describe('ConteudoEtapaComponent', () => {
  let component: ConteudoEtapaComponent;
  let fixture: ComponentFixture<ConteudoEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoEtapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
