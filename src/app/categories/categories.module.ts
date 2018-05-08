import { FormsModule } from '@angular/forms';
import { CategoriesService } from './categories.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ArticlesStartComponent } from './articles-start/articles-start.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthorsService } from '../author-profile/authors.service';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoryItemComponent } from './categories-list/category-item/category-item.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule
  ],
  declarations: [CategoriesComponent,
    CategoriesListComponent,
    ArticlesStartComponent,
    ArticlesComponent,
    CategoryItemComponent
],
exports: [
  ArticlesComponent
],
providers: [CategoriesService,  AuthorsService]
})
export class CategoriesModule { }
