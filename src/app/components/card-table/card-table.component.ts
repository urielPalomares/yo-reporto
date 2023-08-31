import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent {
  @Input() incidents: any;
  @Output() selectedIncident = new EventEmitter<any>();

  title = 'Últimas incidencias';
  selectIncident!: any;

  constructor() {}

  ngOnInit() {}

  getSeverity(status: any) {
        return 'danger';
  }

  details(event: any) {
    this.selectedIncident.emit(event.data);
  }
}
