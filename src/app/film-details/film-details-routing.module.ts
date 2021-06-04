import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FilmDetailsComponent } from './film-details.component';
import {FilmDetailsChildComponent} from './film-details-child/film-details-child.component'
import { DetailsNavbarComponent } from './details-navbar/details-navbar.component';

const routes: Routes = [
  { path: '', component: DetailsNavbarComponent,
   children: [{path:'movie/:id-title', component: FilmDetailsComponent,
                children: [{path:'child', component: FilmDetailsChildComponent}] 
                }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class FilmDetailsRoutingModule { }
