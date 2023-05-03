import {Component, OnInit} from '@angular/core';
import {PriceService} from "../../../shared/services/price.service";
import {map, switchMap, timer} from "rxjs";
import {Icon} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-heading-cards',
  templateUrl: './heading-cards.component.html',
  styleUrls: ['./heading-cards.component.scss']
})
export class HeadingCardsComponent implements OnInit {

  currencies: any[] = []
  icons: Icon[] = [
    {src: 'assets/top-menu-imgs/market-imgs/BNB.png', alt: 'BNB-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/DOT.png', alt: 'DOT-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/ETH.png', alt: 'ETH-icon'},
    {src: 'assets/top-menu-imgs/market-imgs/LTC.png', alt: 'LTC-icon'},
  ]

  constructor(private priceService: PriceService) {
  }

  ngOnInit(): void {
    timer(0, 60000).pipe(
      switchMap(() => {
        return this.priceService.getCurrencies('ETH,BNB,LTC,DOT').pipe(
          map((data) => {
            console.log(data)
            const Coins = Object.values(data.data)
            this.priceService.updateData(Coins, this.icons)
            return Coins
          })
        )
      })
    ).subscribe( response => {
      this.currencies = response
      console.log(response)
    })
  }

}
