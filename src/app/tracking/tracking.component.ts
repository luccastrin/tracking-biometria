import { Component, OnInit } from '@angular/core';
import { Bullet, Linha, Tracking } from './models/tracking.model';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  etapas = {
    etapaNaoIniciada: {
      bullet: Bullet.inativo,
      linha: Linha.inativa,
    },
    etapaEmAndamento: {
      bullet: Bullet.ativoSemMarcacao,
      linha: Linha.inativa,
    },
    etapaConcluida: {
      bullet: Bullet.ativoComMarcacao,
      linha: Linha.ativa,
    },
  };

  trackingBiometria: Tracking[] = [
    {
      titulo: 'Atualização de e-mail',
      subtitulo:
        'Para receber o código de validação, confirme o e-mail informado no cadastro ou atualize os dados',
      mostraConteudoVariavel: true,
      mostrarTracejado: true,
      etapas: this.etapas.etapaEmAndamento,
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
      (etapa: Tracking) => etapa.mostraConteudoVariavel
    );
  }

  adicionaAlturaPadrao(conteudo: boolean) {
    return !conteudo ? 'container-padrao' : 'container-conteudo';
  }

  alteraEstadoTracking(item: string) {
    return item;
  }
}
