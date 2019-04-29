import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { PatternAddComponent } from './pattern-add/pattern-add.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatternAddComponent,
    PatternListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'patterns/add',
        component: PatternAddComponent
      },
      {
        path: 'patterns/add/:id',
        component: PatternAddComponent
      },   
      {
        path: 'patterns',
        component: PatternListComponent
      },  
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }