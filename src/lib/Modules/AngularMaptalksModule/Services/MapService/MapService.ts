import { Injectable } from "@angular/core";
import { Coordinate, Map } from "maptalks";
import { MapConfiguration } from "./MapServiceTypes";
import { BasePluginOptions } from "../../../AngularMaptalksPluginModule/Components/AngularMaptalksBasePluginComponent/AngularMaptalksBasePluginComponentType";

@Injectable()
/*Сервис карты.Все настройки можно задавать отсюда*/
export default class MapService {
  /*Объект карты */
  Map!: Map;
  /*Геометрии и настройки плагинов */
  private PluginsOptions: any[] = [];
  /*Центр карты */
  Center!: number[] | Coordinate;
  /*Уровень приближения карты*/
  Zoom!: number;
  /*URL Template для базового тайлового слоя */
  BaseTileLayerUrlTemplate!: string | (() => string);

  /*Установить новую конфигурацию для карты */
  SetConfiguration(MapConfiguration: MapConfiguration) {
    if (MapConfiguration.Center !== undefined) {
      this.Center = MapConfiguration.Center;
    }
    if (MapConfiguration.Zoom !== undefined) {
      this.Zoom = MapConfiguration.Zoom;
    }

    if (MapConfiguration.BaseTileLayerUrlTemplate !== undefined) {
      this.BaseTileLayerUrlTemplate = MapConfiguration.BaseTileLayerUrlTemplate;
    }
  }
  /*Регистрация нового плагина в сервисе */
  RegisterPlugin(PluginOptions: BasePluginOptions) {
    this.PluginsOptions.push(PluginOptions);
  }
}
