import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { error } from 'protractor';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent implements OnInit {

  public myResponse;

  constructor(public news:NewsService,private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this.slimLoadingBarService.start();
    this.myResponse=this.news.getData().subscribe(
      data=>{
        console.log(data);
        this.slimLoadingBarService.complete();
        this.myResponse=data["articles"];

      },
      error=>{
        console.log(error.errorMessage);

      }
    )
   
  }

}
