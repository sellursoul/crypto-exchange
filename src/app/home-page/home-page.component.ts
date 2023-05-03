import {Component, OnInit} from '@angular/core';
import {PriceService} from "../shared/services/price.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private priceService: PriceService) {
  }

  ngOnInit() {
  }

}

