import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-codigo-validacao',
  templateUrl: './codigo-validacao.component.html',
  styleUrls: ['./codigo-validacao.component.scss'],
})
export class CodigoValidacaoComponent implements OnInit {
  @Output() enviaConfirmacaoCodigo = new EventEmitter();
  formCodigoValidacao!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCodigoValidacao = this.fb.group({
      campo1: [null],
      campo2: [null],
      campo3: [null],
      campo4: [null],
      campo5: [null],
      campo6: [null],
    });
  }

  confirmarCodigo() {
    console.log('confirmarCodigo');
    this.enviaConfirmacaoCodigo.emit();
  }

  reenviarCodigo() {
    console.log('reenviarCodigo');
  }

  editarEmail() {
    console.log('editarEmail');
  }
}
function output(): (
  target: CodigoValidacaoComponent,
  propertyKey: 'enviaCodigo'
) => void {
  throw new Error('Function not implemented.');
}
