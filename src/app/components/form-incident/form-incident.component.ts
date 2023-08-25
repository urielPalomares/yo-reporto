import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.component.html',
  providers: [MessageService]
})
export class FormIncidentComponent {
  visible = true;
  incident: any = {
    title: "Bache enorme",
    description: "Se abrio un nuevo bache en la calle Juarez",
    latitude: 19.3909829,
    longitude: -99.308764
  }

  constructor(
    private readonly incidentsService: IncidentsService,
    private messageService: MessageService
  ) {}

  async create() {
    this.incidentsService.create({
      ...this.incident,
      userId: 1,
      incidentStatusId: 1,
      incidentCategoryId: 3
    }).subscribe(response => {
      this.visible = false;
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se reporto correctamente la incidencia' });
    }, (err: any) => {
      throw new Error(err.error);
    })
  }
}
