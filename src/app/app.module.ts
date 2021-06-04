import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FilmCatalogModule } from './film-catalog/film-catalog.module;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { FormsModule } from '@angular/forms';

 import { config } from 'rxjs';
import { configService, CONFIG_SERVICE } from './config-service';
import { Config, ConfigService } from './config';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AliasConfigService } from './config-service-class';
import { MainComponent } from './main/main.component';
import { FilmDetailsModule } from './film-details/film-details.module';
import {FilmCatalogModule} from './film-catalog/film-catalog.module';
//import { FilmsListComponent } from './film-catalog/films-list/films-list.component';

// import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    // FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
   FilmCatalogModule,
    FilmDetailsModule
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatTabsModule,
    // MatProgressSpinnerModule,
   // MainComponent
    //FilmCatalogModule
  ],
  providers: [ConfigService,
     { provide: CONFIG_SERVICE, useValue: configService },
     { provide: AliasConfigService, useValue: configService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

