import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportarCandidatosComponent } from './components/importar-candidatos/importar-candidatos.component';
import { ContarPorEstadoComponent } from './components/contar-por-estado/contar-por-estado.component';
import { ImcMedioComponent } from './components/imc-medio/imc-medio.component';
import { PercentualObesosComponent } from './components/percentual-obesos/percentual-obesos.component';
import { MediaIdadeComponent } from './components/media-idade/media-idade.component';
import { DoadoresTipoSanguineoComponent } from './components/doadores-tipo-sanguineo/doadores-tipo-sanguineo.component';

const routes: Routes = [
  { path: 'importar', component: ImportarCandidatosComponent },
  { path: 'contar-por-estado', component: ContarPorEstadoComponent },
  { path: 'imc-medio', component: ImcMedioComponent },
  { path: 'percentual-obesos', component: PercentualObesosComponent },
  { path: 'media-idade', component: MediaIdadeComponent },
  { path: 'doadores-tipo-sanguineo', component: DoadoresTipoSanguineoComponent },
  { path: '', redirectTo: '/importar', pathMatch: 'full' }  // Redireciona para a página de importar por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
