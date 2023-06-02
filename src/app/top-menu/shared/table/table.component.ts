import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CoinsArrayEl} from "../../../shared/interfaces/interfaces";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() currencies: MatTableDataSource<CoinsArrayEl>;
  @Input() length: number

  displayedColumns: string[] = ['id', 'name', 'price', '24h%', 'cap', 'supply'];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.currencies.paginator = this.paginator
  }

}
