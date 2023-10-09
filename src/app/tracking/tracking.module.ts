import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrackingComponent } from './tracking.component';
import { ConteudoEtapaComponent } from './components/conteudo-etapa/conteudo-etapa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { EtapaAtualComponent } from './components/etapa-atual/etapa-atual.component';

const components = [
  TrackingComponent,
  ConteudoEtapaComponent,
  EtapaAtualComponent,
  DadosUsuarioComponent,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...components],
  declarations: [...components, DadosUsuarioComponent],
  providers: [],
})
export class TrackingModule {}
