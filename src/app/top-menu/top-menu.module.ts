import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MarketPageComponent} from "./market-page/market-page.component";
import {HeadingCardsComponent} from "./market-page/heading-cards/heading-cards.component";
import {MarketCoinsComponent} from "./market-page/market-coins/market-coins.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NgChartsModule } from 'ng2-charts';
import {AppModule} from "../app.module";
import {CoreModule} from "../shared/modules/core.module";

const routes: Routes = [
  {path: 'market', component: MarketPageComponent}
]

@NgModule({
  declarations:[
    HeadingCardsComponent,
    MarketCoinsComponent,
    MarketPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    MatIconModule,
    CoreModule,
    MatButtonModule,
    NgChartsModule
  ],
  exports:[RouterModule]
})

export class TopMenuModule{}
