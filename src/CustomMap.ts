interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private customMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);

    this.customMap = new google.maps.Map(mapElement as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
