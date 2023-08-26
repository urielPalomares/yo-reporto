import { MapConfiguration } from './maps.interface';

export const mockMapConfiguration: MapConfiguration = {
  container: 'map',
  centerCoordinates: [-99.133209, 19.432608 ],
  style: 'mapbox://styles/mapbox/streets-v12',
  zoom: 7,
  marks: [
    { lngLat: [-98.183334, 19.033333]}, // Puebla
    { lngLat: [-100.316116, 25.686613], color: 'black'}, // Monterrey
    { lngLat: [-99.125519, 19.451054], color: 'red'} // Mexico City
  ]
};
