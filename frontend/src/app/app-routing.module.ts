import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatternAddComponent } from './pattern-add/pattern-add.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternEditComponent } from './pattern-edit/pattern-edit.component';

const routes: Routes = [
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
      {
        path: 'patterns/edit/:id',
        component: PatternEditComponent
      },  
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
