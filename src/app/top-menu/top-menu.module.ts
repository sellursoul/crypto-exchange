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
import {CoreModule} from "../shared/modules/core.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {WatchlistPageComponent} from "./watchlist-page/watchlist-page.component";
import {WatchlistCoinsComponent} from "./watchlist-page/watchlist-coins/watchlist-coins.component";
import {WatchlistOptionalsComponent} from "./watchlist-page/watchlist-optionals/watchlist-optionals.component";
import {TableComponent} from "./shared/table/table.component";
import {CoinDataService} from "./shared/services/coin-data.service";
import {AddCoinModalComponent} from "./watchlist-page/watchlist-coins/add-coin-modal/add-coin-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'market', component: MarketPageComponent},
  {path: 'watchlist', component: WatchlistPageComponent},
]

@NgModule({
  declarations: [
    HeadingCardsComponent,
    MarketCoinsComponent,
    MarketPageComponent,
    WatchlistPageComponent,
    WatchlistCoinsComponent,
    WatchlistOptionalsComponent,
    TableComponent,
    AddCoinModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    MatIconModule,
    CoreModule,
    MatButtonModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [CoinDataService]
})

export class TopMenuModule{}
