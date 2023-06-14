import {Component, OnInit} from '@angular/core';
import {CoinsArrayEl} from "../../../shared/interfaces/interfaces";
import {CoinDataService} from "../../shared/services/coin-data.service";
import {Observable, shareReplay, switchMap, take, timer} from "rxjs";

@Component({
  selector: 'app-watchlist-optionals',
  templateUrl: './watchlist-optionals.component.html',
  styleUrls: ['./watchlist-optionals.component.scss']
})
export class WatchlistOptionalsComponent implements OnInit {
  currencies$: Observable<CoinsArrayEl[] | null>
  coins: string[] = ['BTC', 'ETH', 'XRP', 'LTC', 'MATIC', 'USDC', 'USDT', 'SOL', 'ADA', 'AVAX', 'DOT', 'DOGE', 'BNB', 'ATOM', 'NEAR', 'TRX', 'ALGO', 'BCH', 'XLM', 'LUNA']


  constructor(private dataService: CoinDataService) {
  }

  ngOnInit(): void {
    this.currencies$ = timer(0, 60000).pipe(
      switchMap(() => this.dataService.getCoins(this.coins.join(','))),
      shareReplay(1)
    )
  }
}
