import { Component } from '@angular/core';
import {Icon} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-investors-cont',
  templateUrl: './investors-cont.component.html',
  styleUrls: ['./investors-cont.component.scss']
})
export class InvestorsContComponent {
  icons: Icon[] = [
    {src:"assets/home-imgs/investors-block/logoipsum-logo-8.png", alt:"Logo"},
    {src:"assets/home-imgs/investors-block/logoipsum-logo-30.png", alt:"Logo"},
    {src:"assets/home-imgs/investors-block/logoipsum-logo-12.png", alt:"Logo"},
    {src:"assets/home-imgs/investors-block/logoipsum-logo-54.png", alt:"Logo"},
    {src:"assets/home-imgs/investors-block/logoipsum-logo-50.png", alt:"Logo"},
    {src:"assets/home-imgs/investors-block/logoipsum-logo-52.png", alt:"Logo"}
  ]
}
