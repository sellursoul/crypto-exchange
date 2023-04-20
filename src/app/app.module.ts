import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoLayoutComponent } from './shared/auto-layout/auto-layout.component';
import { NonAuthorizedHeaderComponent } from './shared/auto-layout/non-authorized-header/non-authorized-header.component';
import { AuthorizedHeaderComponent } from './shared/auto-layout/authorized-header/authorized-header.component';
import {AppRoutingModule} from "./app.routing.module";
import {NonAuthorizedFooterComponent} from "./shared/auto-layout/non-authorized-footer/non-authorized-footer.component";
import {AuthorizedFooterComponent} from "./shared/auto-layout/authorized-footer/authorized-footer.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./shared/modules/core.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./auth/shared/services/auth-token.interceptor";
import {AuthService} from "./auth/shared/services/auth.service";
import {AuthGuard} from "./auth/shared/services/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    AutoLayoutComponent,
    HomePageComponent,
    NonAuthorizedHeaderComponent,
    AuthorizedHeaderComponent,
    NonAuthorizedFooterComponent,
    AuthorizedFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
