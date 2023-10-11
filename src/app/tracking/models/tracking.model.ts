export interface ITracking {
  titulo: string;
  subtitulo: string | null;
  mostraConteudoVariavel: boolean;
  mostrarTracejado: boolean;
  etapas: IEtapaStatus;
}

export interface IEtapaStatus {
  bullet: BulletEnum;
  linha: LinhaEnum;
}

export enum BulletEnum {
  inativo = 'inativo',
  ativoSemMarcacao = 'ativo-sem-marcacao',
  ativoComMarcacao = 'ativo-com-marcacao',
}

export enum LinhaEnum {
  inativa = 'inativa',
  ativa = 'ativa',
}

export enum EtapaAtivaEnum {
  email = 0,
  celular = 1,
  biometria = 2,
}
