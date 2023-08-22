import { NgModule } from '@angular/core';
import { CardTotalComponent } from './card-total/card-total.component';
import { MapsComponent } from './maps/maps.component';
import { StatisticsBarComponent } from './statistics-bar/statistics-bar.component';

@NgModule({
    exports: [
        StatisticsBarComponent,
        MapsComponent
    ],
    declarations: [
        MapsComponent,
        CardTotalComponent,
        StatisticsBarComponent
    ]
})
export class ComponentsModule { }
