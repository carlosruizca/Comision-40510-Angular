import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoService } from './services/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';
import { env } from 'src/environment/environment';
import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // {provide: CursoService, useExisting: CursoAlphaService}
    // {provide: CursoService, useValue:cursos }
    {provide: CursoService, useFactory: () => {
      if(env.utilizarServicioAlpla){
        return new CursoAlphaService()
      }else {
        return new CursoService()
      }
    }
  },
  {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
