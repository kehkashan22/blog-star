import { PreventLoggedInAccessService } from './auth/prevent-logged-in-access.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'articles',
    loadChildren: './categories/categories.module#CategoriesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'article',
    loadChildren: './article-detail/article-detail.module#ArticleDetailModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'author',
    loadChildren: './author-profile/author-profile.module#AuthorProfileModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [PreventLoggedInAccessService]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
