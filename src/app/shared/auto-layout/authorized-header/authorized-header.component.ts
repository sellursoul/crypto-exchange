import { Component } from '@angular/core';
import {AuthService} from "../../../auth/shared/services/auth.service";

@Component({
  selector: 'app-authorized-header',
  templateUrl: './authorized-header.component.html',
  styleUrls: ['./authorized-header.component.scss']
})
export class AuthorizedHeaderComponent {

  constructor(private auth: AuthService) {
  }

  onLogout(event: Event) {
    event.preventDefault()
    this.auth.logout()
  }
}
