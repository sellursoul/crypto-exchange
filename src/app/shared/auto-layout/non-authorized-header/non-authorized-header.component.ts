import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-non-authorized-header',
  templateUrl: './non-authorized-header.component.html',
  styleUrls: ['./non-authorized-header.component.scss']
})
export class NonAuthorizedHeaderComponent {
  @Input() menuPoints: string[]

  constructor() {
  }
}
