import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportarCandidatosComponent } from './components/importar-candidatos/importar-candidatos.component';
import { ContarPorEstadoComponent } from './components/contar-por-estado/contar-por-estado.component';
import { ImcMedioComponent } from './components/imc-medio/imc-medio.component';
import { PercentualObesosComponent } from './components/percentual-obesos/percentual-obesos.component';
import { MediaIdadeComponent } from './components/media-idade/media-idade.component';
import { DoadoresTipoSanguineoComponent } from './components/doadores-tipo-sanguineo/doadores-tipo-sanguineo.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportarCandidatosComponent,
    ContarPorEstadoComponent,
    ImcMedioComponent,
    PercentualObesosComponent,
    MediaIdadeComponent,
    DoadoresTipoSanguineoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
