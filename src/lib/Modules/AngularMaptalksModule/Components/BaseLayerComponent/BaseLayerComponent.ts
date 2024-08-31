import { Component, Input, OnInit } from "@angular/core";
import { Layer } from "maptalks";

@Component({
  selector: "BaseLayerComponent",
  templateUrl: "./BaseLayerComponent.html",
})

/*Базовый слой с общими настройками для других слоев*/
export default abstract class BaseLayerComponent<LayerClass extends Layer>
  implements OnInit
{
  constructor() {}
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
  abstract InitLayer(): void;

  ngOnInit(): void {
    this.InitLayer();
  }
}
