import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.scss'],
})
export class DadosUsuarioComponent implements OnInit {
  @Output() enviarCodigoValidacao = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editarEmail() {
    console.log('editarEmail');
  }

  enviarCodigo() {
    console.log('enviarCodigo');
    this.enviarCodigoValidacao.emit();
  }
}
