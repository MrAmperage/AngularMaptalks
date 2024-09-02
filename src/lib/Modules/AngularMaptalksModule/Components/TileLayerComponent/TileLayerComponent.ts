import { Component, Input } from "@angular/core";
import BaseLayerComponent from "../BaseLayerComponent/BaseLayerComponent";
import { TileLayer } from "maptalks";
import { MapComponent, MapService } from "../../../../../public-api";

@Component({
  selector: "TileLayerComponent",
  templateUrl: "./TileLayerComponent.html",
})
/*Тайловый слой карты */
export default class TileLayerComponent extends BaseLayerComponent<TileLayer> {
  @Input()
  UrlTemplate!: string | (() => string);
  @Input()
  TileSize: [number, number] = [256, 256];
  constructor(
    private MapService: MapService,
    private MapComponent: MapComponent
  ) {
    super(MapComponent);
  }
  override PrepareLayer(): void {
    this.LayerObject = new TileLayer(this.Id, {
      forceRenderOnMoving: this.ForceRenderOnMoving,
      forceRenderOnRotating: this.ForceRenderOnRotating,
      forceRenderOnZooming: this.ForceRenderOnZooming,
      urlTemplate: this.GetUrlTemplate,
      tileSize: this.TileSize,
    });
  }
  get GetUrlTemplate() {
    switch (true) {
      case this.UrlTemplate !== undefined:
        return this.UrlTemplate;
      case this.MapService.BaseTileLayerUrlTemplate !== undefined:
        return this.MapService.BaseTileLayerUrlTemplate;
      default:
        throw new Error("Для тайлового слоя не указан UrlTemplate");
    }
  }
}
