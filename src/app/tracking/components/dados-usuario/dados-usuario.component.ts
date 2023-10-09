import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EtapaAtiva } from '../../models/tracking.model';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.scss'],
})
export class DadosUsuarioComponent implements OnInit {
  @Input() etapaAtiva!: number;
  @Input() codigoValidacao!: boolean;
  @Output() enviaCodigoValidacao = new EventEmitter();

  get etapaAtivaEmailCelular() {
    return (
      this.etapaAtiva === EtapaAtiva.email ||
      this.etapaAtiva === EtapaAtiva.celular
    );
  }

  constructor() {}

  ngOnInit(): void {}

  editarEmail() {
    console.log('editarEmail');
  }

  enviarCodigo() {
    console.log('enviarCodigo');
    this.enviaCodigoValidacao.emit();
  }
}
