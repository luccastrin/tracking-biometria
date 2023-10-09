export interface Tracking {
  titulo: string;
  subtitulo: string | null;
  mostraConteudoVariavel: boolean;
  mostrarTracejado: boolean;
  etapas: EtapaStatus;
}

export interface EtapaStatus {
  bullet: Bullet;
  linha: Linha;
}

export enum Bullet {
  inativo = 'inativo',
  ativoSemMarcacao = 'ativo-sem-marcacao',
  ativoComMarcacao = 'ativo-com-marcacao',
}

export enum Linha {
  inativa = 'inativa',
  ativa = 'ativa',
}

export enum EtapaAtiva {
  email = 0,
  celular = 1,
  biometria = 2,
}
