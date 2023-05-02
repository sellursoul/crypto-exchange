import { Component } from '@angular/core';
import {DownloadLink} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-download-links',
  templateUrl: './download-links.component.html',
  styleUrls: ['./download-links.component.scss']
})
export class DownloadLinksComponent {
  cards: DownloadLink[] = [
    {src: "assets/home-imgs/download-block/Windows.png",alt: "Windows",upperText: "Windows",lowerText: "Download PC-client"},
    {src: "assets/home-imgs/download-block/AppStore.png",alt: "App-store",upperText: "App Store",lowerText: "Download IOS"},
    {src: "assets/home-imgs/download-block/MacOS.png",alt: "Mac-OS",upperText: "Mac OS",lowerText: "Download Mac OS"},
    {src: "assets/home-imgs/download-block/PlayMarket.png",alt: "Play-market",upperText: "Google Play",lowerText: "Download Android"},
  ]

}
