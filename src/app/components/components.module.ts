import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CardTotalComponent } from './card-total/card-total.component';
import { MapsComponent } from './maps/maps.component';
import { StatisticsBarComponent } from './statistics-bar/statistics-bar.component';
import { FormIncidentModule } from './form-incident/form-incident.module';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        StatisticsBarComponent,
        MapsComponent,
        FormIncidentModule,
    ],
    imports: [
        DialogModule,
        FormIncidentModule,
        CommonModule
    ],
    declarations: [
        MapsComponent,
        CardTotalComponent,
        StatisticsBarComponent
    ]
})
export class ComponentsModule { }
