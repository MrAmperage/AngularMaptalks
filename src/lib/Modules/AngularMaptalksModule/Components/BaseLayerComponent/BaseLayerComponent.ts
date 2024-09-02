import { Component, Input, OnInit } from "@angular/core";
import { Layer } from "maptalks";
import MapComponent from "../MapComponent/MapComponent";

@Component({
  selector: "BaseLayerComponent",
  templateUrl: "./BaseLayerComponent.html",
})

/*Базовый слой с общими настройками для других слоев*/
export default abstract class BaseLayerComponent<LayerClass extends Layer>
  implements OnInit
{
  constructor(private MapComponentInstance: MapComponent) {}
  LayerObject!: LayerClass;
  @Input()
  Id!: string;
  @Input()
  ZIndex!: number;
  @Input()
  ForceRenderOnMoving: boolean = false;
  @Input()
  ForceRenderOnZooming: boolean = false;
  @Input()
  ForceRenderOnRotating: boolean = false;
  abstract PrepareLayer(): void;

  InitLayer() {
    this.PrepareLayer();
    this.MapComponentInstance.MapObject.addLayer(this.LayerObject);
  }

  ngOnInit(): void {
    this.InitLayer();
  }
}
