import { WMSTileLayer } from "maptalks";
import BaseLayerComponent from "../BaseLayerComponent/BaseLayerComponent";
import { Input } from "@angular/core";
import MapComponent from "../MapComponent/MapComponent";
/*Компонент для WMS слоев */
export default class WMSTileLayerComponent extends BaseLayerComponent<WMSTileLayer> {
  constructor(MapComponent: MapComponent) {
    super(MapComponent);
  }
  @Input()
  Layers!: string;
  @Input()
  Format!: string;
  @Input()
  UrlTemplate: string | (() => string);

  PrepareLayer(): void {
    this.LayerObject = new WMSTileLayer(this.Id, {
      layers: this.Layers,
      format: this.Format,
      urlTemplate: this.UrlTemplate,
    });
  }
}
