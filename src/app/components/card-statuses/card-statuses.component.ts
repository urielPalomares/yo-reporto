import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-statuses',
  templateUrl: './card-statuses.component.html',
  styleUrls: ['./card-statuses.component.scss'],
})
export class CardStatusesComponent {
  @Input() incidents: any;
  title = 'INCIDENTS BY STATUS';

  data: any;
  options: any;

  ngOnInit() {
    const values = this.incidents.map((inc: any) => {
      return parseInt(inc.count);
    });
    const labels = this.incidents.map((inc: any) => {
      return inc.description;
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '80%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
}
