import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: any = 
    [
      
      // { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
      { path: '/movies', label: 'Фильмы',labelItem1: 'Популярные фильмы',labelItem2:'Ожидаемые', labelItem3: 'Лучшие',
      id: 'navbarDropdownMovies' , active: 'button-active', icon: 'list_alt' },
      { path: '/films', label: 'Сериалы', labelItem: 'Популярные актеры',
       id: 'navbarDropdownSerials', active: 'button-active', icon: 'home' },
      { path: '/actors', label: 'Люди',
      id: 'navbarDropdownActors', active: 'button-active', icon: 'list_alt' },
      { path: '/actors', label: 'Ещё',
      id: 'navbarDropdownMore', active: 'button-active', icon: 'list_alt' },
  
      // { path: '/search-router', label: 'Поиск фильмов', active: 'button-active', icon: 'list_alt' }
    ]
  ;

}
