import { Component, Input, OnInit } from "@angular/core";
import { PluginType } from "./AngularMaptalksBasePluginComponentType";
import { MapComponent, MapService } from "../../../../../public-api";
import { MapTool } from "maptalks";
/*Абстрактный класс для наследования остальных плагинов */
@Component({
  selector: "AngularMaptalksBasePluginComponent",
  templateUrl: "./AngularMaptalksBasePluginComponent.html",
})
export default abstract class AngularMaptalksBasePluginComponent
  implements OnInit
{
  constructor(
    private MapComponent: MapComponent,
    private MapService: MapService
  ) {}
  private MapTool!: MapTool;
  /*Цвет иконки */
  @Input()
  IconColor: `#${string}` = "#ffffff";
  /*Цвет фона */
  @Input()
  BackgroundColor: `#${string}` = "#002140";
  /*Тип плагина*/
  Type: PluginType = "Panel";

  abstract InitPlugin();
  Register() {
    if (this.MapService !== undefined) {
      this.MapService.RegisterPlugin({
        BackgroundColor: this.BackgroundColor,
        IconColor: this.IconColor,
        Type: this.Type,
      });
    } else {
      new Error("Не найден MapService,общие настройки для плагинов недоступны");
    }
  }
  /*Добавление плагина на карту*/
  StartPlugin() {
    this.MapTool.addTo(this.MapComponent.MapObject);
  }

  abstract get GetIcon();

  ngOnInit(): void {
    this.Register();
    this.InitPlugin();
    this.StartPlugin();
  }
}
