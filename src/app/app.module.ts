import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SonidosComponent } from './pages/sonidos/sonidos.component';
import { AlarmaComponent } from './pages/alarma/alarma.component';
import { SemanaComponent } from './pages/semana/semana.component';
import { MesComponent } from './pages/mes/mes.component';
import { AnioComponent } from './pages/anio/anio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GraficasComponent,
    VideosComponent,
    SonidosComponent,
    AlarmaComponent,
    SemanaComponent,
    MesComponent,
    AnioComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(
       {
        apiKey: "AIzaSyD2rNbmr1TqnZ0tYWGCCTKducP-LEhokSY",
        authDomain: "sleepapp-b82fc.firebaseapp.com",
        projectId: "sleepapp-b82fc",
        storageBucket: "sleepapp-b82fc.appspot.com",
        messagingSenderId: "479555746528",
        appId: "1:479555746528:web:c2ffff04761818a98aee85"
      }
    )),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
