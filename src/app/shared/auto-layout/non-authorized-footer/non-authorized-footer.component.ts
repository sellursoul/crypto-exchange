import {Component, Input} from '@angular/core';
import {dropdownAnimation, menuAnimation} from "./animations";
import {DownloadLink, FooterLink, Icon} from "../../interfaces/interfaces";

@Component({
  selector: 'app-non-authorized-footer',
  templateUrl: './non-authorized-footer.component.html',
  styleUrls: ['./non-authorized-footer.component.scss'],
  animations: [menuAnimation, dropdownAnimation]
})
export class NonAuthorizedFooterComponent {

  @Input() downloadLinks: DownloadLink[]

  footerLinks: FooterLink[] = [
    {title: 'Exchange', values: ['Exchange Home', 'Margin Trading', 'Derivatives Trading', 'Supercharger']},
    {title: 'Support', values: ['Request Form', 'Contact Support', 'FAQ', 'Security']},
    {title: 'Resources', values: ['Downloads', 'Desktop Application', 'Buy Crypto', 'Referral', 'Listing Trading']},
    {title: 'Learn', values: ['What\'s Trending', 'Product News', 'Events', 'University','Research', 'Market Update']},
    {title: 'Company', values: ['About Us', 'Careers', 'News', 'Security', 'Community', 'Announcements']},
  ];
  socialIcons: Icon[] = [
    {src: "../../../../assets/footer-imgs/Facebook.png", alt: "Facebook"},
    {src: "../../../../assets/footer-imgs/Instagram.png", alt: "Instagram"},
    {src: "../../../../assets/footer-imgs/Youtube.png", alt: "Youtube"},
    {src: "../../../../assets/footer-imgs/Twitter.png", alt: "Twitter"},
    {src: "../../../../assets/footer-imgs/Linkedin.png", alt: "Linkedin"}
  ];
  hide: boolean = false;

  constructor() {
  }

  hideLinks(event: Event) {
    event.preventDefault()
    this.hide = !this.hide
  }
}
