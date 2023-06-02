import {Component, OnInit, ViewChild} from '@angular/core';
import {map, switchMap, timer} from "rxjs";
import {PriceService} from "../../../shared/services/price.service";
import {CoinsArrayEl, Icon} from "../../../shared/interfaces/interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SortType} from "../../../shared/enums/enums";
import {CoinDataService} from "../../shared/services/coin-data.service";

@Component({
  selector: 'app-market-coins',
  templateUrl: './market-coins.component.html',
  styleUrls: ['./market-coins.component.scss']
})
export class MarketCoinsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  currencies: MatTableDataSource<CoinsArrayEl> = new MatTableDataSource<CoinsArrayEl>();
  icons: Icon[] = [
    {src: 'assets/top-menu-imgs/market-imgs/ADA.png', alt: 'ADA-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/ALGO.png', alt: 'ALGO-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/ATOM.png', alt: 'ATOM-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/AVAX.png', alt: 'AVAX-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/BCH.png', alt: 'BCH-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/BNB.png', alt: 'BNB-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/BTC.png', alt: 'BTC-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/DOGE.png', alt: 'DOGE-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/DOT.png', alt: 'DOT-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/ETH.png', alt: 'ETH-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/LTC.png', alt: 'LTC-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/LUNA.png', alt: 'LUNA-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/MATIC.png', alt: 'MATIC-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/NEAR.png', alt: 'NEAR-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/SOL.png', alt: 'SOL-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/TRX.png', alt: 'TRX-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/USD.png', alt: 'USD-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/USDT.png', alt: 'USDT-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/XLM.png', alt: 'XLM-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/XRP.png', alt: 'XRP-icon'}
  ];
  coins: string[] = ['BTC','ETH','XRP','LTC','MATIC','USDC','USDT','SOL','ADA','AVAX','DOT','DOGE','BNB','ATOM','NEAR','TRX','ALGO','BCH','XLM','LUNA']
  sortTypes: typeof SortType = SortType

  constructor(private coinDataService: CoinDataService) {
  }

  ngOnInit(): void {
    timer(0, 60000).pipe(
      switchMap(() => this.coinDataService.getCoins(this.coins.join(','), this.icons)))
      .subscribe((resp) => {
      this.currencies.data = resp
      console.log(resp)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.currencies.filter = filterValue.trim().toLowerCase();

    if (this.currencies.paginator) {
      this.currencies.paginator.firstPage();
    }
  }

  gainersSort(sortType: SortType) {
    if (sortType === SortType.Gainers) {
      this.currencies.data.sort((a, b) => {
        const percentChangeA = a[0].quote.USD.percent_change_24h / 100;
        const percentChangeB = b[0].quote.USD.percent_change_24h / 100;
        return percentChangeB - percentChangeA;
      })
    }
    this.updateData()
  }

  losersSort(sortType: SortType) {
    if (sortType === SortType.Losers) {
      this.currencies.data.sort((a, b) => {
        const percentChangeA = a[0].quote.USD.percent_change_24h / 100;
        const percentChangeB = b[0].quote.USD.percent_change_24h / 100;
        return percentChangeA - percentChangeB;
      })
    }
    this.updateData()
  }

  volumeSort(sortType: SortType) {
    if (sortType === SortType.TopVolume) {
      this.currencies.data.sort((a, b) => {
        const volumeChangeA = a[0].quote.USD.volume_24h / 100;
        const volumeChangeB = b[0].quote.USD.volume_24h / 100;
        return volumeChangeB - volumeChangeA;
      })
    }
    this.updateData()
  }

  tradingSort(sortType: SortType) {
    if (sortType === SortType.TopTrading) {
      this.currencies.data.sort((a, b) => {
        const capChangeA = a[0].quote.USD.fully_diluted_market_cap;
        const capChangeB = b[0].quote.USD.fully_diluted_market_cap;
        return capChangeB - capChangeA;
      })
    }
    this.updateData()
  }

  dateSort(sortType: SortType) {
    if (sortType === SortType.NewInMarket) {
      this.currencies.data.sort((a, b) => {
        const dateA = new Date(a[0].date_added);
        const dateB = new Date(b[0].date_added);
        return dateB.getTime() - dateA.getTime();
      })
    }
    this.updateData()
  }

  updateData() {
    this.currencies.paginator?.firstPage()
    this.currencies._updateChangeSubscription()
  }
}
