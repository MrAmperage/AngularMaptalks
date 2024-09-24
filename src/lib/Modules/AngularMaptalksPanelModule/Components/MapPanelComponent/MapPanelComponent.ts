import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { control } from "maptalks";
import MapComponent from "../../../AngularMaptalksModule/Components/MapComponent/MapComponent";

@Component({
  selector: "MapPanelComponent",
  templateUrl: "./MapPanelComponent.html",
})
/*Компонент для создания панелей на карте*/
export default class MapPanelComponent implements OnInit, OnDestroy {
  constructor(private MapComponent: MapComponent) {}
  /*Контейнер для панели */
  @ViewChild("PanelContainer", { static: true })
  PanelContainer!: ElementRef<HTMLElement>;

  /*Объект панели */
  Panel!: control.Panel;
  //TODO добавить тип
  @Input()
  Position: any = "top-right";
  @Input()
  Draggable: boolean = true;
  @Input()
  Custom: boolean = false;
  @Input()
  Content!: string | HTMLElement;
  @Input()
  CloseButton: boolean = true;
  /*Инициализация панели */
  InitPanel() {
    this.Panel = new control.Panel({
      position: this.Position,
    }).setContent(this.PanelContainer.nativeElement);

    this.Panel.addTo(this.MapComponent.MapObject);
  }
  /*Удаление панели */
  RemovePanel() {
    this.Panel.remove();
  }

  ngOnInit(): void {
    console.log(this.PanelContainer.nativeElement);
    this.InitPanel();
  }
  ngOnDestroy(): void {
    this.RemovePanel();
  }
}
