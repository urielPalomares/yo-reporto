import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { mockMapConfiguration } from './maps.mock';
@Component({
  selector: 'maps-app',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() incidents = [];
  @Output() selectedIncident = new EventEmitter<any>();

  ngOnInit(): void {

    const { 
      centerCoordinates, 
      container,
      style,
      zoom
    } = mockMapConfiguration;

    mapboxgl.accessToken = import.meta.env.NG_APP_KEY_MAP;
    const map = new mapboxgl.Map({
      container,
      style,
      center: centerCoordinates,
      zoom: zoom,
    });

    this.incidents.forEach((mark: any) => {
      const position: LngLatLike = [Number(mark.longitude), Number(mark.latitude)];

      var marker = new mapboxgl.Marker({ color: '#3bb2d0' })
      .setLngLat(position as any)
      .addTo(map);

      const clickMarket = marker.getElement() as any;
      clickMarket.addEventListener('click', () => {
        this.showDetails(mark);
      });
    });
  }

  showDetails (mark: any) {
    this.selectedIncident.emit(mark);
  }
}
