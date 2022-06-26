import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';
import { RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { RistoranteComponent } from './ristorante/ristorante.component';
import { SuperiorComponent } from './superior/superior.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServizioComponent } from './servizio/servizio.component';
import { SuiteComponent } from './suite/suite.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CameraComponent,
    HotelComponent,
    PrenotazioneComponent,
    RistoranteComponent,
    SuperiorComponent,
    DeluxeComponent,
    ContattiComponent,
    ServizioComponent,
    SuiteComponent,
    MenuComponent,
    HomeComponent,
    RegistrazioneComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'camera', component: CameraComponent },
      { path: 'hotel', component: HotelComponent },
      { path: 'prenotazione', component: PrenotazioneComponent },
      { path: 'ristorante', component: RistoranteComponent },
      { path: 'superior', component: SuperiorComponent },
      { path: 'deluxe', component: DeluxeComponent },
      { path: 'contatti', component: ContattiComponent },
      { path: 'servizio', component: ServizioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'suite', component: SuiteComponent },
      { path: 'home', component: HomeComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
