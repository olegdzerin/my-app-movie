import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details.component';
import { FilmDetailsRoutingModule } from './film-details-routing.module';

 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { FormsModule } from '@angular/forms';
import { FilmDetailsChildComponent } from './film-details-child/film-details-child.component';
import { FilmDetailsNavbarComponent } from './film-details-navbar/film-details-navbar.component';
import { DetailsNavbarComponent } from './details-navbar/details-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    FilmDetailsRoutingModule,
    RouterModule,
    FormsModule,
     BrowserAnimationsModule
  ],
  declarations: [FilmDetailsComponent, FilmDetailsChildComponent, FilmDetailsNavbarComponent, DetailsNavbarComponent]
})
export class FilmDetailsModule { }
