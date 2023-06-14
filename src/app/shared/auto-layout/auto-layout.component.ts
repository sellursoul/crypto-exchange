  import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/shared/services/auth.service";
import {DownloadLink} from "../interfaces/interfaces";

@Component({
  selector: 'app-auto-layout',
  templateUrl: './auto-layout.component.html',
  styleUrls: ['./auto-layout.component.scss']
})
export class AutoLayoutComponent implements OnInit{
  menuPoints: string[] = ['Market', 'Watchlist', 'Portfolio', 'Learn'];
  downloadLinks: DownloadLink[] = [
    {src: "assets/footer-imgs/App%20Download%20Icon.png", alt: "Windows", upperText:'Download PC-Client', lowerText:'Windows'},
    {src: "assets/footer-imgs/App%20Download%20Icon%20(1).png", alt: "MacOS", upperText:'Download for the', lowerText:'MacOS'},
    {src: "assets/footer-imgs/App%20Download%20Icon%20(2).png", alt: "App Store", upperText:'Download on the', lowerText:'App Store'},
    {src: "assets/footer-imgs/App%20Download%20Icon%20(3).png", alt: "Google Play", upperText:'Get in on', lowerText:'Google Play'},
  ];
  authorized: boolean = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.userSub$.subscribe(user =>
    this.authorized = !!user)
  }
}
