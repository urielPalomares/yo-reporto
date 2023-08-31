import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CardIncidentDetailsComponent } from './card-incident-details.component';

@NgModule({
    imports: [
        TagModule,
        TableModule,
        ToastModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        CommonModule,
    ],
    declarations: [CardIncidentDetailsComponent],
    exports: [CardIncidentDetailsComponent]
})
export class CardIncidentDetailsModule { }
