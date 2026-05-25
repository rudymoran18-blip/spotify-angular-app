import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { SpotifyService } from './services/spotify.service';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Buscar } from './components/buscar/buscar';
import { NavbarComponent } from './shared/navbar-component/navbar-component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistaComponent } from './components/artista-component/artista-component';
import { FooterComponent } from './components/footer-component/footer-component';

@NgModule({
  declarations: [
    App,
    Home,
    Buscar,
    NavbarComponent,
    ArtistaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    SpotifyService
  ],
  bootstrap: [App]
})
export class AppModule { }
