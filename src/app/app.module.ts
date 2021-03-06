import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { PreventLoggedInAccessService } from './auth/prevent-logged-in-access.service';
import { PipesModule } from './pipes/pipes.module';
import { AuthGuard } from './auth/auth-guard.service';
import { StarsService } from './shared/stars.service';
import { ArticleDetailModule } from './article-detail/article-detail.module';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';

import { Daterangepicker } from 'ng2-daterangepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ModalModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
/* For Firebase Related */
import * as firebase from 'firebase';
import { NgxPaginationModule } from 'ngx-pagination';
import { RoundPipe } from 'app/pipes/round.pipe';
import { DropZoneDirective } from './drop-zone.directive';

export const firebaseConfig = environment.firebaseConfig;
// firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    DropZoneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    CoreModule,
    ArticleDetailModule,
    Daterangepicker,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    PipesModule,
    UserModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    StarsService,
    AuthGuard,
    PreventLoggedInAccessService
  ]
})
export class AppModule { }
