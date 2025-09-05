import { ChangeDetectionStrategy, Component } from "@angular/core";

/*Компонент виджета отображения транспорта*/
@Component({
  selector: "TransportWidgetComponent",
  templateUrl: "TransportWidgetComponent.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransportWidgetComponent {}
