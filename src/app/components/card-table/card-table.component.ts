import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent {
  @Input() incidents: any;
  title = 'Últimas incidencias';
  ngOnInit() {}

  getSeverity(status: any) {
        return 'danger';
  }
}
