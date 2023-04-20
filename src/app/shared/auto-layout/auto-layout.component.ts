import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/shared/services/auth.service";

@Component({
  selector: 'app-auto-layout',
  templateUrl: './auto-layout.component.html',
  styleUrls: ['./auto-layout.component.scss']
})
export class AutoLayoutComponent implements OnInit{

  authorized: boolean = false

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.userSub$.subscribe(user =>
    this.authorized = !!user)
  }
}
