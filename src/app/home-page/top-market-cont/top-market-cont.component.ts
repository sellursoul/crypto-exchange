import {Component, OnInit} from '@angular/core';
import {map, switchMap, timer} from "rxjs";
import {Icon} from "../../shared/interfaces/interfaces";
import {PriceService} from "../../shared/services/price.service";

@Component({
  selector: 'app-top-market-cont',
  templateUrl: './top-market-cont.component.html',
  styleUrls: ['./top-market-cont.component.scss']
})
export class TopMarketContComponent implements OnInit{
  currencies: any[] = []
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
        return this.priceService.getCurrencies('BTC,BNB,ETH,XRP').pipe(
          map((data) => {
            const cryptoData = Object.values(data.data)
            this.priceService.updateData(cryptoData, this.icons)
            return cryptoData
          })
        )
      })).subscribe(resp => {
      this.currencies = resp
    })
  }

}
