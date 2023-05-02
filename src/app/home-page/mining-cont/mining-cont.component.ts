import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-mining-cont',
  templateUrl: './mining-cont.component.html',
  styleUrls: ['./mining-cont.component.scss']
})
export class MiningContComponent implements OnInit {

  value: FormControl

  constructor() {
  }

  ngOnInit(): void {
    this.value = new FormControl('')
  }

  clearValue() {
    this.value.setValue('')
  }

  Subscribe() {

  }
}
