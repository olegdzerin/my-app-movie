import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {} from '@angular/core'
import { Config } from 'src/app/config';
import { CONFIG_SERVICE } from 'src/app/config-service';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  @Output() sortMovies = new EventEmitter<object>();
;
  
constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService,
) {
}

  ngOnInit(): void {
    
  }
  emitedArray (sortBy:any, type:any): Array<object> {
      this.filmsService.modeShowFilms = [{sortBy: `${sortBy}`, type: `${type}`}]
    return [
      {sortBy: `${sortBy}`, type: `${type}`}
    ]
  }
 

  sortingMoviesByDecrease(){
   this.sortMovies.emit(this.emitedArray('popular', 'decrease'));
  };
  sortingMoviesByIncrease(){
    this.sortMovies.emit(this.emitedArray('popular','increase'));
   };
   sortingMoviesByDecreaseRating(){
    this.sortMovies.emit(this.emitedArray('top_rated','decrease'));
   };
   sortingMoviesByIncreaseRating(){
    this.sortMovies.emit(this.emitedArray('top_rated','increase'));
   };
   
   sortingMoviesByDecreaseDate(){
    this.sortMovies.emit(this.emitedArray('release_date','decrease'));
   };
   sortingMoviesByIncreaseDate(){
    this.sortMovies.emit(this.emitedArray('release_date','increase'));
   };
   sortingMoviesByDecreaseTitle(){
    this.sortMovies.emit(this.emitedArray('title','decrease'));
   };
   sortingMoviesByIncreaseTitle(){
    this.sortMovies.emit(this.emitedArray('title','increase'));
   };
}
