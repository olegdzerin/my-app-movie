import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, ElementRef, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
// import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { CONFIG_SERVICE } from '../../config-service';
import { Config } from '../../config';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { SortOption } from '../../sort-option';
//import { FilmItemComponent } from '../film-item/film-item.component';

//import { SearchComponent } from '../search/search.component';

import { Actor } from '../../actor';

import { HttpClient } from '@angular/common/http';
import { SortingService } from '../sorting.service';


@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  filmsData: Film[] = [];
  actorsData: Actor[] = [];
  counter: number = 0;
  variantDisplay: boolean = true;

  pageFilms: number = 1;
  modeShowFilms: any = []

  links: any = [
    {
      title: 'Сортировать',
      id: 'dropdownMenuSorting'
    },
    {
      title: 'Фильтры',
      id: 'dropdownMenuFilter'
    },
    {
      title: 'Где посмотреть',
      id: 'dropdownMenuWatch'
    }
  ];
  subjectForReleaseDate: Subject<Film[]> = new Subject<Film[]>();


  // @ViewChild(SearchComponent) search: SearchComponent;
  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router,public sortingService: SortingService) {
  }

  ngOnInit() {

   this.makeShowFilms([{
     sortBy: 'popular', type: 'decrease'
   }]);
  }



  makeSearchFilms(filmsDataSearch?: Film[]) {
    // if ((this.router.url === "/film") || (this.router.url === 'main/film')) {
    this.variantDisplay = false;
    // this.filmsData = this.filmsService.getFilms();
    // }
  }
  makeFilmsData(sortBy: any) {
    this.filmsService.initPopularFilms(this.pageFilms, false, sortBy);
    this.filmsService.getFilms();
    this.filmsService.subjectForFilmsData
      .subscribe({
        next: (films: Film[]) => {
          this.filmsData = films;
          this.subjectForReleaseDate.next(this.filmsData); 
        }
      });
  }
  makeShowFilms(sortMode: any) {
   
    this.modeShowFilms = sortMode
    this.pageFilms = 1;
    this.filmsService.films = [];
    if (sortMode[0].sortBy === 'popular' && sortMode[0].type === 'decrease') {
      console.log('ok');
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
  };
    if (sortMode[0].sortBy === 'popular' && sortMode[0].type === 'increase') {
      this.pageFilms = 501 - this.pageFilms
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    // sort by top_rated
    if (sortMode[0].sortBy === 'top_rated' && sortMode[0].type === 'decrease') {
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    if (sortMode[0].sortBy === 'top_rated' && sortMode[0].type === 'increase') {
      this.pageFilms = 439 - this.pageFilms
    this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    //sort by date

    if (sortMode[0].sortBy === 'release_date' && sortMode[0].type === 'decrease') {
      // this.makeFilmsData(this.modeShowFilms[0].sortBy);
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByDateFn('decrease', films)
        
      });
    };
    if (sortMode[0].sortBy === 'release_date' && sortMode[0].type === 'increase') {
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByDateFn('increase', films) 
      });
    };
    //sort by title
    if (sortMode[0].sortBy === 'title' && sortMode[0].type === 'decrease') {
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByTitleFn('decrease', films) 
      });
    };
    if (sortMode[0].sortBy === 'title' && sortMode[0].type === 'increase') {
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByTitleFn('increase', films) 
      });
    };
  }
  setPagingFilms() {
    if (this.modeShowFilms[0].sortBy === 'popular' && this.modeShowFilms[0].type === 'decrease') {
      this.pageFilms++;
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    if (this.modeShowFilms[0].sortBy === 'popular' && this.modeShowFilms[0].type === 'increase') {
      this.pageFilms--;
      this.filmsService.pageFilms = this.pageFilms

      this.filmsService.initPopularFilms(this.pageFilms, true, 'popular');
     
    };
    //add movease  sorted by top_rated
    if (this.modeShowFilms[0].sortBy === 'top_rated' && this.modeShowFilms[0].type === 'decrease') {
      this.pageFilms++;
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    if (this.modeShowFilms[0].sortBy === 'top_rated' && this.modeShowFilms[0].type === 'increase') {
      this.pageFilms--;
      // this.filmsService.pageFilms = this.pageFilms
      this.makeFilmsData(this.modeShowFilms[0].sortBy);
    };
    // add movease sorted by release_date
    if (this.modeShowFilms[0].sortBy === 'release_date' && this.modeShowFilms[0].type === 'decrease') {
       this.pageFilms++;
       this.filmsService.pageFilms = this.pageFilms;
       this.makeFilmsData('popular');
       this.subjectForReleaseDate
       .subscribe({
         next: (films) => this.sortingService.sortingByDateFn('decrease', films)
       });
    }
    if (this.modeShowFilms[0].sortBy === 'release_date' && this.modeShowFilms[0].type === 'increase') {
      this.pageFilms++;
      this.filmsService.pageFilms = this.pageFilms;
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByDateFn('increase', films)
      });
     };
      // add movease sorted by title
      if (this.modeShowFilms[0].sortBy === 'title' && this.modeShowFilms[0].type === 'decrease') {
        this.pageFilms++;
        this.filmsService.pageFilms = this.pageFilms;
        this.makeFilmsData('popular');
        this.subjectForReleaseDate
        .subscribe({
          next: (films) => this.sortingService.sortingByTitleFn('decrease', films)
        });
     }
     if (this.modeShowFilms[0].sortBy === 'title' && this.modeShowFilms[0].type === 'increase') {
      this.pageFilms++;
      this.filmsService.pageFilms = this.pageFilms;
      this.makeFilmsData('popular');
      this.subjectForReleaseDate
      .subscribe({
        next: (films) => this.sortingService.sortingByTitleFn('increase', films)
      });
   }

  }
  setPagingSearchFilms() {
    //  this.search.searchFilms();
  };
  makeStarFilms(arg: any) {
    console.log(arg);
  }
}