import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MainComponent } from '../main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
//import { ActorsListComponent } from './actors-list/actors-list.component';
// import { SearchRouterComponent } from './search-router/search-router.component';
import { FormsModule } from '@angular/forms';

 import { FilmItemComponent } from './film-item/film-item.component';


import { HttpClientModule } from '@angular/common/http';

//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilmCatalogRoutingModule } from './film-catalog-routing.module';
import { RouterModule } from '@angular/router';
import { MainFilmCatalogComponent } from './main-film-catalog/main-film-catalog.component';
import { SortingComponent } from './sorting/sorting.component';
//import { FiltrComponent } from './filtr/filtr.component';
import { WhereWatchComponent } from './where-watch/where-watch.component';
import { FilterComponent } from './filter/filter.component';
// import { FilmDetailsComponent } from '../film-details/film-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FilmCatalogRoutingModule,
    RouterModule
  ],
  declarations: [
    // FilmDetailsComponent,
   // MainComponent,
   
    FilmsListComponent,
    MainFilmCatalogComponent,
  //  ActorsListComponent,
    FilmItemComponent,
  SortingComponent,
  //FiltrComponent,
  WhereWatchComponent,
  FilterComponent,
  //  SearchComponent,
   // ActorItemComponent
  ]
})
export class FilmCatalogModule {
}
