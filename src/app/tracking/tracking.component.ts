import { Component, OnInit } from '@angular/core';

enum Bullet {
  inativo = 'inativo',
  ativoSemMarcacao = 'ativo-sem-marcacao',
  ativoComMarcacao = 'ativo-com-marcacao',
}

enum Linha {
  inativa = 'inativa',
  ativa = 'ativa',
}

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

  trackingBiometria = [
    {
      titulo: 'Atualização de e-mail',
      subtitulo:
        'Para receber o código de validação, confirme o e-mail informado no cadastro ou atualize os dados',
      mostrarConteudo: true,
      mostrarTracejado: true,
      etapa: this.etapas.etapaEmAndamento,
    },
    {
      titulo: 'Atualização de celular',
      subtitulo:
        'Para receber o código de validação por SMS, confirme o celular informado no cadastro ou atualize os dados',
      mostrarConteudo: false,
      mostrarTracejado: true,
      etapa: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Cadastro de biometria Facial',
      subtitulo: 'teste',
      mostrarConteudo: false,
      mostrarTracejado: true,
      etapa: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Validação dos dados',
      subtitulo: 'teste',
      mostrarConteudo: false,
      mostrarTracejado: false,
      etapa: this.etapas.etapaNaoIniciada,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  adicionaAlturaPadrao(conteudo: boolean) {
    return !conteudo ? 'container-padrao' : 'container-conteudo';
  }

  alteraEstadoTracking(item: string) {
    return item;
  }
}
