import { Geometry, VectorLayer } from "maptalks";
import BaseLayerComponent from "../BaseLayerComponent/BaseLayerComponent";
import {
  Component,
  DoCheck,
  Input,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
} from "@angular/core";
import MapComponent from "../MapComponent/MapComponent";

@Component({
  selector: "VectorLayerComponent",
  templateUrl: "./VectorLayerComponent.html",
})
export default class VectorLayerComponent
  extends BaseLayerComponent<VectorLayer>
  implements DoCheck
{
  GeometriesDiffer: IterableDiffer<Geometry>;
  constructor(
    private MapComponent: MapComponent,
    private IterableDiffer: IterableDiffers
  ) {
    super(MapComponent);
    this.GeometriesDiffer = this.IterableDiffer.find(this.Geometries).create();
  }
  @Input()
  Geometries: Geometry[] = [];
  @Input()
  Renderer: "canvas" | "gl" | "dom" = "canvas";
  @Input()
  Opacity: number = 1;
  @Input()
  Visible: boolean = true;
  @Input()
  MaxZoom: number = -1;
  @Input()
  MinZoom: number = -1;
  @Input()
  CacheVectorOnCanvas: boolean = true;
  @Input()
  DefaultIconSize: [number, number] = [20, 20];
  @Input()
  GeometryEvents: boolean = true;
  @Input()
  Debug: boolean = false;
  @Input()
  EnableSimplify: boolean = true;
  //TODO Добавить список типов курсора
  @Input()
  Cursor: string = "default";

  ngDoCheck(): void {
    const Changes = this.GeometriesDiffer.diff(this.Geometries);
    this.MeshesHandler(Changes);
  }

  MeshesHandler(Changes: IterableChanges<Geometry> | null) {
    if (Changes !== null) {
      Changes.forEachRemovedItem((RemovedGeometry) => {
        this.LayerObject.removeGeometry(RemovedGeometry.item);
      });
      Changes.forEachAddedItem((AddedGeometry) => {
        this.LayerObject.addGeometry(AddedGeometry.item);
      });
    }
  }
  PrepareLayer(): void {
    this.LayerObject = new VectorLayer(this.Id, this.Geometries, {
      zIndex: this.ZIndex,
      forceRenderOnMoving: this.ForceRenderOnMoving,
      forceRenderOnRotating: this.ForceRenderOnRotating,
      forceRenderOnZooming: this.ForceRenderOnMoving,
      debug: this.Debug,
      enableSimplify: this.EnableSimplify,
      cursor: this.Cursor,
      geometryEvents: this.GeometryEvents,
      defaultIconSize: this.DefaultIconSize,
      cacheVectorOnCanvas: this.CacheVectorOnCanvas,
      minZoom: this.MinZoom,
      maxZoom: this.MaxZoom,
      opacity: this.Opacity,
      renderer: this.Renderer,
    });
  }
}
