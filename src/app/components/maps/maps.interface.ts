export interface MapConfiguration {
  container: string;
  style: string;
  centerCoordinates: mapboxgl.LngLatLike;
  zoom: number;
  marks: MapMark[];
};

export interface MapMark {
  lngLat: mapboxgl.LngLatLike;
  color?: string;
};
