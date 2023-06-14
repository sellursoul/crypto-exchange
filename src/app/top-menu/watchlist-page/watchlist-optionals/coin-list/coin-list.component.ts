import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SortType} from "../../../../shared/enums/enums";
import {MatTableDataSource} from "@angular/material/table";
import {CoinsArrayEl} from "../../../../shared/interfaces/interfaces";
import {CoinDataService} from "../../../shared/services/coin-data.service";
import {Subscription, switchMap, timer} from "rxjs";

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit, OnDestroy {
  currencies: MatTableDataSource<CoinsArrayEl>
  displayedColumns: string[] = ['name', 'price', '24h%'];
  coins: string[] = ['BTC', 'ETH', 'XRP', 'LTC', 'MATIC', 'USDC', 'USDT', 'SOL', 'ADA', 'AVAX', 'DOT', 'DOGE', 'BNB', 'ATOM', 'NEAR', 'TRX', 'ALGO', 'BCH', 'XLM', 'LUNA'];
  sortTypes: typeof SortType = SortType;
  activeSort: SortType;
  private subscription: Subscription

  constructor(private dataService: CoinDataService) {
  }

  ngOnInit(): void {
    this.subscription = timer(0, 60000).pipe(
      switchMap(() => this.dataService.getCoins(this.coins.join(',')))
    ).subscribe((resp) => {
      this.currencies = new MatTableDataSource(resp);
    })
  }

  changeSort(sort: SortType) {
    this.activeSort = sort;
    this.sort();
  }

  sort() {
    if (this.activeSort === SortType.Gainers) {
      this.gainersSort()
      console.log(this.currencies, this.activeSort)
    } else if (this.activeSort === SortType.Losers) {
      this.loserSort();
    } else if (this.activeSort === SortType.NewInMarket) {
      this.dateSort();
    }
  }

  gainersSort() {
    this.currencies.data.sort((a: any, b: any) => {
      const percentChangeA = a[0].quote.USD.percent_change_24h / 100;
      const percentChangeB = b[0].quote.USD.percent_change_24h / 100;
      return percentChangeB - percentChangeA;
    })
    this.currencies._updateChangeSubscription();
  }

  loserSort() {
    this.currencies.data.sort((a: any, b: any) => {
      const percentChangeA = a[0].quote.USD.percent_change_24h / 100;
      const percentChangeB = b[0].quote.USD.percent_change_24h / 100;
      return percentChangeA - percentChangeB;
    })
    this.currencies._updateChangeSubscription();
  }

  dateSort() {
    this.currencies.data.sort((a: any, b: any) => {
      const dateA = new Date(a[0].date_added);
      const dateB = new Date(b[0].date_added);
      return dateB.getTime() - dateA.getTime();
    })
    this.currencies._updateChangeSubscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
