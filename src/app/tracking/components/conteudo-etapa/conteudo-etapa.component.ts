import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conteudo-etapa',
  templateUrl: './conteudo-etapa.component.html',
  styleUrls: ['./conteudo-etapa.component.scss'],
})
export class ConteudoEtapaComponent implements OnInit {
  @Input() titulo!: string;
  @Input() subtitulo!: string | null;
  @Input() etapaAtiva!: number;
  @Input() mostraConteudoVariavel!: boolean;
  @Output() enviaConfirmacaoCodigo = new EventEmitter();
  codigoValidacao = false;

  constructor() {}

  ngOnInit(): void {}

  recebeCodigoValidacao() {
    this.codigoValidacao = true;
  }

  recebeConfirmacaoCodigo() {
    this.enviaConfirmacaoCodigo.emit();
  }
}
