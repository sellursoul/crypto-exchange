import {Component, OnInit} from '@angular/core';
import {map, switchMap, timer} from "rxjs";
import {CoinsArrayEl, Icon} from "../../shared/interfaces/interfaces";
import {PriceService} from "../../shared/services/price.service";

@Component({
  selector: 'app-top-market-cont',
  templateUrl: './top-market-cont.component.html',
  styleUrls: ['./top-market-cont.component.scss']
})
export class TopMarketContComponent implements OnInit{
  currencies: CoinsArrayEl[] = []
  icons: Icon[] = [
    {src: 'assets/home-imgs/icons/BNB-icon.png', alt: 'BNB-icon'},
    {src: 'assets/home-imgs/icons/BTC-icon.png', alt: 'BTC-icon'},
    {src: 'assets/home-imgs/icons/ETH-icon.png', alt: 'ETH-icon'},
    {src: 'assets/home-imgs/icons/XRP-icon.png', alt: 'XRP-icon'},
  ]

  constructor(private priceService: PriceService) {
  }

  ngOnInit() {
    timer(0, 60000).pipe(
      switchMap(() => {
        const coins = 'BTC,BNB,ETH,XRP';
        return this.priceService.getCurrencies(coins).pipe(
          map((data) => {
            const coinsData = Object.values(data.data)
            this.priceService.updateData(coinsData, this.icons)
            return coinsData
          })
        )
      })).subscribe(resp => {
      this.currencies = resp
      console.log(this.currencies)
    })
  }

}
