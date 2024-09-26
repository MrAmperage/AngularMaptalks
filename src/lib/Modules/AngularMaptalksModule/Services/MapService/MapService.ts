import { Injectable } from "@angular/core";
import { Coordinate } from "maptalks";
import { MapConfiguration } from "./MapServiceTypes";

@Injectable()
/*Сервис карты.Все настройки можно задавать отсюда*/
export default class MapService {
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
}
