import { ArticlesComponent } from './articles/articles.component';
import { ArticlesStartComponent } from './articles-start/articles-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      { path: '', component: ArticlesStartComponent },
      {
        path: ':article_id',
        component: ArticlesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
