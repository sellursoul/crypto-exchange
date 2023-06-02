import {Injectable} from "@angular/core";
import {PriceService} from "../../../shared/services/price.service";
import {map} from "rxjs";
import {Icon} from "../../../shared/interfaces/interfaces";

@Injectable()

export class CoinDataService {

  constructor(private priceService: PriceService) {
  }

  getCoins(coins: string, icons: Icon[]) {
    return this.priceService.getCurrencies(coins).pipe(
      map((data) => {
        const coinsData = Object.values(data.data);
        this.priceService.updateData(coinsData, icons);
        return [...coinsData];
      })
    )
  }

}
