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
      mostrarConteudo: true,
      mostrarTracejado: true,
      etapa: this.etapas.etapaEmAndamento,
    },
    {
      titulo: 'Atualização de celular',
      mostrarConteudo: false,
      mostrarTracejado: true,
      etapa: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Cadastro de biometria Facial',
      mostrarConteudo: false,
      mostrarTracejado: true,
      etapa: this.etapas.etapaNaoIniciada,
    },
    {
      titulo: 'Validação dos dados',
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
