import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AutoLayoutComponent} from './shared/auto-layout/auto-layout.component';
import {NonAuthorizedHeaderComponent} from './shared/auto-layout/non-authorized-header/non-authorized-header.component';
import {AuthorizedHeaderComponent} from './shared/auto-layout/authorized-header/authorized-header.component';
import {AppRoutingModule} from "./app.routing.module";
import {NonAuthorizedFooterComponent} from "./shared/auto-layout/non-authorized-footer/non-authorized-footer.component";
import {AuthorizedFooterComponent} from "./shared/auto-layout/authorized-footer/authorized-footer.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./auth/shared/services/auth-token.interceptor";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CoreModule} from "./shared/modules/core.module";
import {NgChartsModule} from "ng2-charts";
import {EasyContComponent} from "./home-page/easy-cont/easy-cont.component";
import {TopMarketContComponent} from "./home-page/top-market-cont/top-market-cont.component";
import {LineChartComponent} from "./home-page/top-market-cont/line-chart/line-chart.component";
import {GreetingContComponent} from "./home-page/greeting-cont/greeting-cont.component";
import {DownloadLinksComponent} from "./home-page/download-links/download-links.component";
import {BestServicesComponent} from "./home-page/best-services/best-services.component";
import {InvestorsContComponent} from "./home-page/investors-cont/investors-cont.component";
import {MiningContComponent} from "./home-page/mining-cont/mining-cont.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AutoLayoutComponent,
    HomePageComponent,
    NonAuthorizedHeaderComponent,
    EasyContComponent,
    GreetingContComponent,
    DownloadLinksComponent,
    TopMarketContComponent,
    AuthorizedHeaderComponent,
    NonAuthorizedFooterComponent,
    AuthorizedFooterComponent,
    LineChartComponent,
    BestServicesComponent,
    InvestorsContComponent,
    MiningContComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    NgChartsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    /*{
  provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
  multi: true
}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
