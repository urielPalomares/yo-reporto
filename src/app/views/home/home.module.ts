import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        ToolbarModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
