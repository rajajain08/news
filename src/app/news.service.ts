import { Injectable } from '@angular/core';

import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
baseUrl = "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=fc70be1981374286b9aa794e1c7de171";
  public getData(){
    let response = this.http.get(this.baseUrl);
    console.log(response);
    return response;
  }
  constructor(public http:HttpClient) { }
}
