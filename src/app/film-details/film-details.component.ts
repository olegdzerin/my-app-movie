
import { Component, EventEmitter, Inject, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../film';
import { Actor } from '../actor';
import { Router } from '@angular/router';
import { CONFIG_SERVICE } from '../config-service';
import { FilmService } from '../film-catalog/film.service';
import { Config } from '../config';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  subject: Subject<any> = new Subject()
  bool: any = true;
  filmCredits: any;
  urlBack(): any {
    // return 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)';
    return `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.film.backdrop_path})`;
  }
 
  film: any = '';
  filmCastActors: any = [];
  transformRuntime(): string {
    var obj = {
      h: () => Math.round(this.film.runtime/60),
      m: () => this.film.runtime - obj.h()
    }
    return `${obj.h()}h${obj.m()}m`
  }
    
  
  styleConfig: any = { 'background_image': this.bool ? 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)' : 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)' }
  styleConfigDiv(): any {
    return {
      'background-image': this.bool ? 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)' : this.urlBack()
    };
  }



  styleConfigBackground() {
    return 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)';
  }



  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
    public router: Router) {
  }
  background(): string {
    return 'background-image:url(https://image.tmdb.org/t/p/w300$/lz1iJlKRBMtE6uHauUneX7THa0c.jpg)';
  }

  // date:any = new Date(this.film.release_date
  //   .replace('-','/').replace('-','/')
  //   );
  date:any = ''



  ngOnInit() {
  //  this.subject.subscribe({
  //       next: (v) => {
         
  //         this.date = v.release_date.replace('-','/').replace('-','/')
  //       }
  //   })
    this.filmsService.getOneFilm(this.filmsService.oneFilmId).subscribe((item) => {
      this.film = item;
      this.film.poster_path = `https://image.tmdb.org/t/p/w300${this.film.poster_path}`
    //  this.subject.next(this.film);
      this.bool = false;
    // console.log(this.film);
      // console.log(this.styleConfigDivFn());
    });
   
    // this.filmsService.getOneFilmCredits(this.filmsService.oneFilmId).subscribe((item) => {
    //   this.filmCredits = item;
    //   this.filmCastActors = this.filmCredits.filmCastActors;
    //   // console.log(item);
    //   console.log(this.filmCastActors);
    // });

  }
  aboutFilm(){}
}
