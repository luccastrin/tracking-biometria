import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { EtapaAtivaEnum } from '../../models/tracking.model';

@Component({
  selector: 'app-etapa-atual',
  templateUrl: './etapa-atual.component.html',
  styleUrls: ['./etapa-atual.component.scss'],
})
export class EtapaAtualComponent implements OnInit {
  @Input() etapaAtiva!: number;
  @Input() codigoValidacao!: boolean;
  @Output() enviaConfirmacaoCodigo = new EventEmitter();
  formCodigoValidacao!: FormGroup;
  codigoValidoMock = 123456; // retorno de uma api?

  get etapaAtivaEmailCelular() {
    return (
      this.etapaAtiva === EtapaAtivaEnum.email ||
      this.etapaAtiva === EtapaAtivaEnum.celular
    );
  }

  get etapaAtivaBiometria() {
    return this.etapaAtiva === EtapaAtivaEnum.biometria;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCodigoValidacao = this.fb.group(
      {
        campo1: [null, Validators.required],
        campo2: [null, Validators.required],
        campo3: [null, Validators.required],
        campo4: [null, Validators.required],
        campo5: [null, Validators.required],
        campo6: [null, Validators.required],
      },
      { validators: this.validaCodigoInvalido(this.codigoValidoMock) }
    );
  }

  validaCodigoInvalido(codigoValido: number) {
    return (groupControl: FormGroup): ValidationErrors | null => {
      const codigoDigitado = Object.values(groupControl.value).join('');
      if (+codigoDigitado !== codigoValido) {
        return { codigoInvalido: true };
      }
      return null;
    };
  }

  validacaoForm() {
    return this.formCodigoValidacao.errors && this.formCodigoValidacao.touched;
  }

  confirmarCodigo() {
    this.enviaConfirmacaoCodigo.emit();
  }

  reenviarCodigo() {
    console.log('reenviarCodigo');
  }

  editarEmail() {
    console.log('editarEmail');
  }
}
