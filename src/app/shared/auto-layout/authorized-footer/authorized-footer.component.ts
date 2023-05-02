import {Component, Input} from '@angular/core';
import {DownloadLink, FooterLink, Icon} from "../../interfaces/interfaces";

@Component({
  selector: 'app-authorized-footer',
  templateUrl: './authorized-footer.component.html',
  styleUrls: ['./authorized-footer.component.scss'],
})
export class AuthorizedFooterComponent {

  @Input() downloadLinks: DownloadLink[]

  footerLinks: FooterLink[] = [
    {title: 'Exchange', values: ['Exchange Home', 'Margin Trading', 'Derivatives Trading', 'Supercharger']},
    {title: 'Support', values: ['Request Form', 'Contact Support', 'FAQ', 'Security']},
    {title: 'Company', values: ['About Us', 'Careers', 'News', 'Security', 'Community', 'Announcements']},
    {title: 'Resources', values: ['Downloads', 'Desktop Application', 'Buy Crypto', 'Referral', 'Listing Trading']},
  ];
  socialIcons: Icon[] = [
    {src: "../../../../assets/footer-imgs/auth-footer-imgs/facebook-f%201.png", alt: "Facebook"},
    {src: "../../../../assets/footer-imgs/auth-footer-imgs/instagram%201.png", alt: "Instagram"},
    {src: "../../../../assets/footer-imgs/auth-footer-imgs/youtube%201.png", alt: "Youtube"},
    {src: "../../../../assets/footer-imgs/auth-footer-imgs/twitter%201.png", alt: "Twitter"},
    {src: "../../../../assets/footer-imgs/auth-footer-imgs/linkedin%201.png", alt: "Linkedin"}
  ];

  constructor() {
  }

}
