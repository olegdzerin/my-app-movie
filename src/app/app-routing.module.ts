import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
//import { FilmsListComponent } from './film-catalog/films-list/films-list.component';
//import { ActorsListComponent } from './film-catalog/actors-list/actors-list.component';
// import { SearchRouterComponent } from './film-catalog/search-router/search-router.component';

import { InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MainFilmCatalogComponent } from './film-catalog/main-film-catalog/main-film-catalog.component';

// import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'm', redirectTo: '/main', pathMatch: 'full' },
  { path: 'home', component: MainComponent },

  // { path: 'film', component: FilmsListComponent },
  // { path: 'actor', component: ActorsListComponent },
  // { path: "search-router", component: SearchRouterComponent },
  // { path: 'lCh', loadChildren: './film-details/film-details.module#FilmDetailsModule' }

  //{ path: 'exp', loadChildren: './film-details/film-details.module#FilmDetailsModule' }

  // { path: 'exp', component: FilmDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
