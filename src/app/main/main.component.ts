import { Component, OnInit, Inject } from '@angular/core';
import { AliasConfigService } from 'src/app/config-service-class';
import { configService, CONFIG_SERVICE } from '../config-service';
import { Film } from 'src/app/film';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  //styles: [`h2 {color: red;}`, ``]
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";

  isRed: boolean = true;
  website: any = { url: 'http://google.com', title: "Google Site" }
 // film: Film;
 movieUrl: any;
 imgPath: any;
  constructor( public aliasConfigService: AliasConfigService,
       @Inject(CONFIG_SERVICE)  conv_serv:Config
    ) {
    this.movieUrl = this.aliasConfigService.movieUrl;
    //this.imgPath = conv_serv.imgPath

  }

  ngOnInit() {
 
    }

}
