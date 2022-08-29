/* import { User } from "./User";
import { Company } from "./Company";

 */
const mapElement = document.getElementById("map");

new google.maps.Map(mapElement as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
