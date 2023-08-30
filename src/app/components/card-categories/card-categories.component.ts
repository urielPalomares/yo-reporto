import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss'],
})
export class CardCategoriesComponent {
  @Input() incidents: any;
  title = 'INCIDENTS BY CATEGORY';

  ngOnInit() {}
}
