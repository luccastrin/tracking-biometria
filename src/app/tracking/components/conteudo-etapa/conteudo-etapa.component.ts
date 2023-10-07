import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo-etapa',
  templateUrl: './conteudo-etapa.component.html',
  styleUrls: ['./conteudo-etapa.component.scss'],
})
export class ConteudoEtapaComponent implements OnInit {
  @Input() etapa!: number;
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() mostraConteudoVariavel!: boolean;
  codigoValidacao = false;

  constructor() {}

  ngOnInit(): void {}

  recebeCodigoValidacao() {
    this.codigoValidacao = true;
  }

  recebeConfirmacaoCodigo() {}
}
