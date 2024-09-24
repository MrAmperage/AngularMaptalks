import {
  Component,
  DoCheck,
  Input,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  OnInit,
} from "@angular/core";
import { ThreeLayer } from "maptalks.three";
import MapComponent from "../MapComponent/MapComponent";
import { Layer } from "maptalks";
import { Camera, Scene, WebGLRenderer } from "three";
import Model from "maptalks.three/dist/Model";

@Component({
  selector: "ThreeLayerComponent",
  templateUrl: "./ThreeLayerComponent.html",
})
/*Трехмерный слой*/
//TODO Переписать с наследованием от BaseLayer
export default class ThreeLayerComponent implements OnInit, DoCheck {
  constructor(
    private MapComponentInstance: MapComponent,
    private IterableDiffer: IterableDiffers
  ) {
    this.ModelsDiffer = this.IterableDiffer.find(this.Models).create();
  }
  ModelsDiffer: IterableDiffer<Model>;

  @Input()
  PrepareToDraw!: (
    WebGLRenderer: WebGLRenderer,
    Scene: Scene,
    Camera: Camera
  ) => void;
  /*Меши для отрисовки */
  @Input()
  Models: Model[] = [];
  LayerObject!: ThreeLayer;
  @Input()
  Id!: string;
  @Input()
  ZIndex!: number;
  /*Включить отрисовку сцены при перемещении карты */
  @Input()
  ForceRenderOnMoving: boolean = false;
  /*Включить отрисовку сцены при зуме карты */
  @Input()
  ForceRenderOnZooming: boolean = false;
  /*Включить отрисовку сцены при повороте карты */
  @Input()
  ForceRenderOnRotating: boolean = false;
  /*Включить обработку событий для геометрий */
  @Input()
  GeometryEvents: boolean = false;
  ngDoCheck(): void {
    const Changes = this.ModelsDiffer.diff(this.Models);
    this.MeshesHandler(Changes);
  }
  //TODO Дописать добавление новых объектов
  MeshesHandler(Changes: IterableChanges<Model> | null) {
    if (Changes !== null) {
      Changes.forEachRemovedItem((RemovedModel) => {
        this.LayerObject.removeMesh([RemovedModel.item]);
      });
      Changes.forEachAddedItem((AddedModel) => {
        this.LayerObject.addMesh([AddedModel.item]);
      });
    }
  }
  PrepareLayer() {
    this.LayerObject = new ThreeLayer(this.Id, {
      forceRenderOnMoving: this.ForceRenderOnMoving,
      forceRenderOnRotating: this.ForceRenderOnRotating,
      forceRenderOnZooming: this.ForceRenderOnZooming,
      geometryEvents: this.GeometryEvents,
    });
    this.LayerObject.setZIndex(this.ZIndex);

    this.LayerObject.prepareToDraw = (
      WebGLRenderer: WebGLRenderer,
      Scene: Scene,
      Camera: Camera
    ) => {
      this.LayerObject.addMesh(this.Models);
    };
  }

  InitLayer() {
    this.PrepareLayer();
    this.MapComponentInstance.MapObject.addLayer(this.LayerObject as Layer);
  }

  ngOnInit(): void {
    this.InitLayer();
  }
}
