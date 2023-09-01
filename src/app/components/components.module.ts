import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MapsComponent } from './maps/maps.component';
import { CardTotalComponent } from './card-total/card-total.component';
import { CardTableModule } from './card-table/card-table.module';
import { StatisticsBarComponent } from './statistics-bar/statistics-bar.component';
import { CardStatusesComponent } from './card-statuses/card-statuses.component';
import { CardCategoriesComponent } from './card-categories/card-categories.component';
import { FormIncidentModule } from './form-incident/form-incident.module';
import { CardIncidentDetailsModule } from './card-incident-details/card-incident-details.module';
import { HeaderComponent } from './homepage/header/header.component';

@NgModule({
    exports: [
        StatisticsBarComponent,
        HeaderComponent,
        MapsComponent,
        CardTableModule,
        FormIncidentModule,
        CardIncidentDetailsModule
    ],
    imports: [
        DialogModule,
        CardTableModule,
        ChartModule,
        TableModule,
        TagModule,
        ButtonModule,
        CommonModule,
        FormIncidentModule,
        CardIncidentDetailsModule,
    ],
    declarations: [
        MapsComponent,
        CardTotalComponent,
        StatisticsBarComponent,
        CardStatusesComponent,
        CardCategoriesComponent,
        HeaderComponent
    ]
})
export class ComponentsModule { }
