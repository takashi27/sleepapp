import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { AnioComponent } from './pages/anio/anio.component';
import { MesComponent } from './pages/mes/mes.component';
import { SemanaComponent } from './pages/semana/semana.component';
import { AlarmaComponent } from './pages/alarma/alarma.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SonidosComponent } from './pages/sonidos/sonidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Graficas', component: GraficasComponent },
  { path: 'Alarmas', component: AlarmaComponent },
  { path: 'Videos', component: VideosComponent },
  { path: 'Sonidos', component: SonidosComponent },
  { path: 'Semana', component: SemanaComponent },
  { path: 'Mes', component: MesComponent },
  { path: 'Anio', component: AnioComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Perfil', component: PerfilComponent },
  { path: '**', redirectTo:'Home' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
