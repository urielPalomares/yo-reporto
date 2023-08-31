import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardTableComponent } from './card-table.component';

@NgModule({
    imports: [
        CommonModule,
        TagModule,
        ToastModule,
        TableModule,
    ],
    declarations: [CardTableComponent],
    exports: [CardTableComponent]
})
export class CardTableModule { }
