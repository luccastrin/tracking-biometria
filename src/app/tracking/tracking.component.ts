import { Component, OnInit } from '@angular/core';
import { BulletEnum, LinhaEnum, ITracking } from './models/tracking.model';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  etapas = {
    etapaNaoIniciada: {
      bullet: BulletEnum.inativo,
      linha: LinhaEnum.inativa,
    },
    etapaEmAndamento: {
      bullet: BulletEnum.ativoSemMarcacao,
      linha: LinhaEnum.inativa,
    },
    etapaConcluida: {
      bullet: BulletEnum.ativoComMarcacao,
      linha: LinhaEnum.ativa,
    },
  };

  trackingBiometria: ITracking[] = [
    {
      titulo: 'Atualização de e-mail',
      subtitulo:
        'Para receber o código de validação, confirme o e-mail informado no cadastro ou atualize os dados',
      mostraConteudoVariavel: true,
      mostrarTracejado: true,
      etapas: this.etapas.etapaConcluida,
    },
    {
      titulo: 'Atualização de celular',
      subtitulo:
        'Para receber o código de validação por SMS, confirme o celular informado no cadastro ou atualize os dados',
      mostraConteudoVariavel: false,
      mostrarTracejado: true,
      etapas: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Cadastro de biometria Facial',
      subtitulo:
        'Acesse o link enviado por SMS para o número (XX) XXXXX XXXX para confirmar sua identidade por reconhecimento facial',
      mostraConteudoVariavel: false,
      mostrarTracejado: true,
      etapas: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Validação dos dados',
      subtitulo: null,
      mostraConteudoVariavel: false,
      mostrarTracejado: false,
      etapas: this.etapas.etapaNaoIniciada,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  encontraEtapaAtiva() {
    return this.trackingBiometria.findIndex(
      (etapa: ITracking) => etapa.mostraConteudoVariavel
    );
  }

  adicionaAlturaPadrao(conteudo: boolean) {
    return !conteudo ? 'container-padrao' : 'container-conteudo';
  }

  alteraEstadoTracking(item: string) {
    return item;
  }

  recebeConfirmacaoCodigo() {
    const posicao = this.trackingBiometria.findIndex(
      (etapa: ITracking) => etapa.mostraConteudoVariavel
    );
    this.trackingBiometria[posicao].mostraConteudoVariavel = false;
    this.trackingBiometria[posicao].etapas = this.etapas.etapaConcluida;
    this.trackingBiometria[posicao + 1].mostraConteudoVariavel = true;
    this.trackingBiometria[posicao + 1].etapas = this.etapas.etapaConcluida;
  }
}
