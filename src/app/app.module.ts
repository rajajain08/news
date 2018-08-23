import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShownewsComponent } from './shownews/shownews.component';

import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component'
import { HttpClientModule} from '@angular/common/http';
import { NewsService } from './news.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    ShownewsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot([
      
      {path:'button',component:ButtonComponent},
      {path:'news',component:ShownewsComponent},
      {path:'',redirectTo:'button',pathMatch:'full'}
    ])
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
