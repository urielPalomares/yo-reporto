import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.scss']
})
export class StatisticsBarComponent implements OnInit {
  @Input() data: any;
  
  title = "TOTAL INCIDENTS";
  subtitle = "Compared to last week";
  total = 0;
  percentage: number = 0;

    constructor() {}

    ngOnInit() {
      this.total = this.data.count;
      this.percentage = this.data.difference;
    }
}
