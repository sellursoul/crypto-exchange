import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {Icon} from "../../shared/interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class PriceService {
  apiKey = 'f05fcc0e-3fd8-4ff6-830e-15374cc7c384'

  constructor(private http: HttpClient) {
  }

  getCurrencies(symbol: string): Observable<any> {
    let headers = new HttpHeaders({"X-CMC_PRO_API_KEY": this.apiKey});
    return this.http.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}`, {headers: headers});
  }

  updateData(data: any[], icons?: Icon[]) {
    data.forEach((currency: any, idx: number) => {
      currency.price = currency[0].quote.USD.price
      currency.name = currency[0].name
      if (icons) {
        currency.src = icons[idx]
      }
    })
  }

}
