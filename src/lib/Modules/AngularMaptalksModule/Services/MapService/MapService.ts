import { Injectable } from "@angular/core";
import { Coordinate, Map } from "maptalks";

@Injectable()
/*Сервис карты.Все настройки можно задавать отсюда*/
export default class MapService {
  //TODO Потом удалить и обращаться к MapObject из родительского MapComponent
  MapObject!: Map;
  /*Центр карты */
  Center: number[] | Coordinate = [0, 0];
  /*Уровень приближения карты*/
  Zoom: number = 0;
  /*URL Template для базового тайлового слоя */
  BaseTileLayerUrlTemplate: string | (() => string) =
    "https://{s}basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
}
