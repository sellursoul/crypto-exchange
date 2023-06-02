import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

interface dialogData {
  coin: FormControl
}

@Component({
  selector: 'app-add-coin-modal',
  templateUrl: './add-coin-modal.component.html',
  styleUrls: ['./add-coin-modal.component.scss']
})
export class AddCoinModalComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<AddCoinModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  add() {
    this.dialogRef.close(this.data.coin.value)
  }

  ngOnInit(): void {
  }
}
