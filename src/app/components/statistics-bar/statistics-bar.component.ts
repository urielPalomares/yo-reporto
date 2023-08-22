import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.scss']
})
export class StatisticsBarComponent implements OnInit {
  title = "TOTAL INCIDENTS";
  subtitle = "Compared to last week";
  total = 12875;
  percentage = "+ 2%";

    constructor() {
    }

    ngOnInit() {}
}
