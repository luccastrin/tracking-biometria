import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-codigo-validacao',
  templateUrl: './codigo-validacao.component.html',
  styleUrls: ['./codigo-validacao.component.scss'],
})
export class CodigoValidacaoComponent implements OnInit {
  @Output() enviaConfirmacaoCodigo = new EventEmitter();
  formCodigoValidacao!: FormGroup;
  codigoValidoMock = 123456; // retorno de uma api?

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCodigoValidacao = this.fb.group(
      {
        campo1: [null, [Validators.required, Validators.maxLength(1)]],
        campo2: [null, [Validators.required, Validators.maxLength(1)]],
        campo3: [null, [Validators.required, Validators.maxLength(1)]],
        campo4: [null, [Validators.required, Validators.maxLength(1)]],
        campo5: [null, [Validators.required, Validators.maxLength(1)]],
        campo6: [null, [Validators.required, Validators.maxLength(1)]],
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
