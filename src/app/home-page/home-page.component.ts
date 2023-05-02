import {Component, OnInit} from '@angular/core';
import {PriceService} from "./services/price.service";
import {map, switchMap, timer} from "rxjs";
import {Icon, Logo} from "../shared/interfaces/interfaces";

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

