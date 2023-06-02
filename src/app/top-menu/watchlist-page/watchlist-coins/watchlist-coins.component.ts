import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {CoinsArrayEl, Icon} from "../../../shared/interfaces/interfaces";
import {catchError, filter, of, switchMap, throwError, timer} from "rxjs";
import {CoinDataService} from "../../shared/services/coin-data.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCoinModalComponent} from "./add-coin-modal/add-coin-modal.component";
import {FormControl} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-watchlist-coins',
  templateUrl: './watchlist-coins.component.html',
  styleUrls: ['./watchlist-coins.component.scss']
})
export class WatchlistCoinsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator

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
  coin: FormControl = new FormControl()
  coins: string[] = ['BTC', 'ETH', 'XRP', 'LTC', 'MATIC', 'USDC', 'USDT', 'SOL', 'ADA', 'AVAX', 'DOT', 'DOGE', 'BNB', 'ATOM', 'NEAR', 'TRX', 'ALGO', 'BCH', 'XLM', 'LUNA']

  constructor(private coinDataService: CoinDataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.updateCurrenciesData();
  }

  updateCurrenciesData() {
    timer(0, 60000).pipe(
      switchMap(() => this.coinDataService.getCoins(this.coins.join(','), this.icons)))
      .subscribe((resp) => {
        this.currencies.data = resp;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.currencies.filter = filterValue.trim().toLowerCase();

    if (this.currencies.paginator) {
      this.currencies.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCoinModalComponent, {
      data: {coin: this.coin}
    });

    dialogRef.afterClosed().pipe(
      filter((result) => result && !this.coins.includes(result))
    ).subscribe((result) => {
      this.handleCoin(result)
    });
  }

  handleCoin(coin: string) {
    this.coinDataService.getCoins(coin, this.icons).pipe(
      catchError((error: HttpErrorResponse) => {
        alert('Произошла ошибка при получении данных для монеты.');
        return of(null);
      })
    ).subscribe((coinData) => {
      if (coinData) {
        this.coins.push(coin)
        this.updateCurrenciesData();
      }
    });
  }
}
