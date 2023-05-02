import { Component } from '@angular/core';
import {DownloadLink} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-best-services',
  templateUrl: './best-services.component.html',
  styleUrls: ['./best-services.component.scss']
})
export class BestServicesComponent {
  cards: DownloadLink[] = [
    {src: "assets/home-imgs/benefits-block/Comes.png",alt: "Comes",upperText: "Safty Comes First",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Deposit.png",alt: "Deposit",upperText: "Easy Deposit & Withdrawls",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Charges.png",alt: "Charges",upperText: "Low Charges",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Bonus.png",alt: "Bonus",upperText: "Bonus & Refferal",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Fast.png",alt: "Fast Transactions",upperText: "Fast Transactions",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Encryption.png",alt: "Encryption",upperText: "Deep Encryption ",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Kyc.png",alt: "KYC",upperText: "Fast KYC",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
    {src: "assets/home-imgs/benefits-block/Support.png",alt: "Support",upperText: "24/7 Support",lowerText: "Lorem ipsum dolor sit amet, dui  consectetur adipiscing elit. Nibh aenean dui aliquet amet."},
  ]
}
