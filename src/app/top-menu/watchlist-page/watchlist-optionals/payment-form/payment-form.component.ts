import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CoinsArrayEl} from "../../../../shared/interfaces/interfaces";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {merge} from "rxjs";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Input() currencies: CoinsArrayEl[] | null
  @Input() coins: string[];

  amount: number = 38723.56
  whiteColor = '#FFFFFF';
  paymentForm: FormGroup;


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('swap-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/top-menu-imgs/watchlist-imgs/SVG/swap.svg'))
  }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      coin: new FormControl(),
      change: new FormControl(),
      firstCurrency: new FormControl('BTC'),
      secondCurrency: new FormControl('USDT')
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currencies && !changes.currencies.firstChange) {
      this.convert();
    }
  }

  get firstAmount() {
    return this.paymentForm.get('coin')
  }

  get secondAmount() {
    return this.paymentForm.get('change')
  }

  get coinCurrency() {
    return this.paymentForm.get('firstCurrency')
  }

  get changeCurrency() {
    return this.paymentForm.get('secondCurrency')
  }

  convert() {
    this.updateConvertedAmount();
    this.subscribeToCurrencyChanges();
  }

  private updateConvertedAmount() {
    const {coin, firstCurrency, secondCurrency} = this.paymentForm.value;

    const fromCurrencyRate = this.currencies?.find((curr) => curr[0].symbol === firstCurrency)?.price;
    const toCurrencyRate = this.currencies?.find((curr) => curr[0].symbol === secondCurrency)?.price;
    const convertedAmount = ((fromCurrencyRate! / toCurrencyRate!) * coin).toFixed(2);

    this.secondAmount?.setValue(convertedAmount, {emitEvent: false});
  }

  private subscribeToCurrencyChanges() {
    const coinChanges$ = this.coinCurrency?.valueChanges;
    const changeChanges$ = this.changeCurrency?.valueChanges;

    if (coinChanges$ && changeChanges$) {
      merge(coinChanges$, changeChanges$).subscribe(() => {
        this.updateConvertedAmount()
      })
    }
  }

  swap() {
    const {firstCurrency, secondCurrency} = this.paymentForm.value;
    this.coinCurrency?.setValue(secondCurrency, {emitEvent: false});
    this.changeCurrency?.setValue(firstCurrency, {emitEvent: false});
    this.convert();
  }

  exchange() {

  }

}
