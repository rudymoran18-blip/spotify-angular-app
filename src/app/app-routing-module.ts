import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Buscar } from './components/buscar/buscar';
import { ArtistaComponent } from './components/artista-component/artista-component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'buscar', component: Buscar },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: '**',  redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
