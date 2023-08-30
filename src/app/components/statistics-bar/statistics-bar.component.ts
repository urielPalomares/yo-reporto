import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.scss']
})
export class StatisticsBarComponent implements OnInit {
  @Input() metrics: any;
  
  title = "TOTAL INCIDENTS";
  subtitle = "Compared to last week";
  total = 0;
  percentage: number = 0;

  incidentsByStatus: any;
  incidentsByCategory: any;

    constructor() {}

    ngOnInit() {
      const { count, difference, incidentsByStatus, incidentsByCategory } = this.metrics;
      this.total = count;
      this.percentage = difference;
      this.incidentsByStatus = incidentsByStatus
      this.incidentsByCategory = incidentsByCategory
    }
}
