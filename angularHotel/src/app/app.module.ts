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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CameraComponent,
    HotelComponent,
    PrenotazioneComponent,
    RistoranteComponent,
    SuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'camera', component: CameraComponent },
      { path: 'hotel', component: HotelComponent },
      { path: 'prenotazione', component: PrenotazioneComponent },
      { path: 'ristorante', component: RistoranteComponent },
      { path: 'superior', component: SuperiorComponent }



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


