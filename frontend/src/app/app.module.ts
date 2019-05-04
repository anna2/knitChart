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
import { PatternEditComponent } from './pattern-edit/pattern-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternAddComponent,
    PatternListComponent,
    PatternEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }