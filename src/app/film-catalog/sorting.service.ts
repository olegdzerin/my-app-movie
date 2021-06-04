import { Injectable } from '@angular/core';
import { Film } from '../film';


@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() {

  }
  sortingByDateFn(sortByDate: string, arr: Array<Film>) {
    if (sortByDate === 'increase') {
      arr.sort(function conpareFn(firstEl, secondEl) {
      
        if(firstEl.release_date && secondEl.release_date){
          var firstElArr = firstEl.release_date.split('-');
          var secondElArr = secondEl.release_date.split('-');
          if (firstElArr[0] < secondElArr[0]) return -1;
          if (firstElArr[0] > secondElArr[0]) return 1;
          if (firstElArr[1] < secondElArr[1]) return -1;
          if (firstElArr[1] > secondElArr[1]) return 1;
          if (firstElArr[2] < secondElArr[2]) return -1;
          if (firstElArr[2] > secondElArr[2]) return 1;
          return 0
        };
        return 0
   
      
      });
    }
    if (sortByDate === 'decrease') {
      arr.sort(function conpareFn(firstEl: Film, secondEl: Film) {
        if(firstEl.release_date && secondEl.release_date)
       { var firstElArr = firstEl.release_date.split('-');
       var secondElArr = secondEl.release_date.split('-');
       if (firstElArr[0] < secondElArr[0]) return 1;
       if (firstElArr[0] > secondElArr[0]) return -1;
       if (firstElArr[1] < secondElArr[1]) return 1;
       if (firstElArr[1] > secondElArr[1]) return -1;
       if (firstElArr[2] < secondElArr[2]) return 1;
       if (firstElArr[2] > secondElArr[2]) return -1;
       return 0}else{
         return 0
       }
      });
    };
  }
  sortingByTitleFn(sortByTitle: string, arr: Array<Film>) {
    if (sortByTitle === 'decrease') {
      
      arr.sort(function conpareFn(firstEl, secondEl) {
        var firstElArr = firstEl.title;
        var secondElArr = secondEl.title;
        if (firstElArr[0] < secondElArr[0]) return -1;
        if (firstElArr[0] > secondElArr[0]) return 1;
        if (firstElArr[1] < secondElArr[1]) return -1;
        if (firstElArr[1] > secondElArr[1]) return 1;
        if (firstElArr[2] < secondElArr[2]) return -1;
        if (firstElArr[2] > secondElArr[2]) return 1;
        return 0
      });
    }
    if (sortByTitle === 'increase') {
  
      arr.sort(function conpareFn(firstEl, secondEl) {
        var firstElArr = firstEl.title;
        var secondElArr = secondEl.title;
        if (firstElArr[0] < secondElArr[0]) return 1;
        if (firstElArr[0] > secondElArr[0]) return -1;
        if (firstElArr[1] < secondElArr[1]) return 1;
        if (firstElArr[1] > secondElArr[1]) return -1;
        if (firstElArr[2] < secondElArr[2]) return 1;
        if (firstElArr[2] > secondElArr[2]) return -1;
        return 0
      });
    };
  }
}

