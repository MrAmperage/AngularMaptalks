import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

/*Компонент оболочка для Maptalks */
@Component({
  selector: "MapComponent",
  templateUrl: "MapComponent.html",
  styleUrls: ["./MapComponent.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MapComponent implements OnInit {
  /*Отображать крест в центре карты */
  @Input()
  CenterCross: boolean = false;
  /*Режим плавного приближения*/
  @Input()
  SeamlessZoom: boolean = true;
  /*Фиксируемся в центре при приближении*/
  @Input()
  ZoomInCenter: boolean = false;
  InitMaptalks() {}
  ngOnInit(): void {
    this.InitMaptalks();
  }
}
