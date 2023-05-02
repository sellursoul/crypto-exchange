import {Component, OnInit} from '@angular/core';
import {Logo} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-greeting-cont',
  templateUrl: './greeting-cont.component.html',
  styleUrls: ['./greeting-cont.component.scss']
})
export class GreetingContComponent implements OnInit{
  logos: Logo[] = [
    {
      srcs: ['assets/home-imgs/logoipsum-logo-gen2.png', 'assets/home-imgs/logoipsum-logo-41.png', 'assets/home-imgs/logoipsum-logo-23.png'],
      alt: 'Logo'
    },
    {
      srcs: ['assets/home-imgs/logoipsum-logo-gen1%201.png', 'assets/home-imgs/logoipsum-logo-33.png', 'assets/home-imgs/logoipsum-logo-22%20(1).png'],
      alt: 'Logo'
    }
  ]

  ngOnInit(): void {
  }
}
