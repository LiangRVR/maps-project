export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private customMap: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);

    this.customMap = new google.maps.Map(mapElement as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
    
    this.infoWindow = new google.maps.InfoWindow();
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", (): void => {
      this.infoWindow.close();
      this.infoWindow.setContent(mappable.markerContent());
      this.infoWindow.open(this.customMap, marker);
    });
  }
}
