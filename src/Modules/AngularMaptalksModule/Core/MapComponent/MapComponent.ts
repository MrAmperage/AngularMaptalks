import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Map } from "maptalks";

/*Компонент оболочка для Maptalks */
@Component({
  selector: "MapComponent",
  templateUrl: "MapComponent.html",
  styleUrls: ["./MapComponent.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MapComponent implements OnInit {
  /*Контейнер карты */
  @ViewChild("Container", { static: true })
  Container!: ElementRef<HTMLDivElement>;
  /*Объект карты */
  Map!: Map;
  /*Отображать крест в центре карты? */
  @Input()
  CenterCross: boolean = false;
  /*Режим плавного приближения?*/
  @Input()
  SeamlessZoom: boolean = true;
  /*Фиксируемся в центре при приближени?*/
  @Input()
  ZoomInCenter: boolean = false;
  InitMaptalks() {}
  ngOnInit(): void {
    this.InitMaptalks();
  }
}
