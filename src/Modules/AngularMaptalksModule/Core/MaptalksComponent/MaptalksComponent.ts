import { ChangeDetectionStrategy, Component } from "@angular/core";

/*Компонент оболочка для Maptalks */
@Component({
  selector: "MaptalksComponent",
  templateUrl: "MaptalksComponent.html",
  styleUrls: ["./MaptalksComponent.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaptalksComponent {}
