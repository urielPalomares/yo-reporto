import { Component, Input  } from '@angular/core';

@Component({
  selector: 'card-total',
  templateUrl: './card-total.component.html',
  styleUrls: ['./card-total.component.scss']
})
export class CardTotalComponent {
  @Input() title: string = "";
  @Input() subtitle = '';
  @Input() total: number = 0;
  @Input() percentage = '';
}
