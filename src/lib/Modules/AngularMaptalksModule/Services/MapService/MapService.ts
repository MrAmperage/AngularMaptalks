import { Injectable } from "@angular/core";
import { Coordinate } from "maptalks";

@Injectable({
  providedIn: "root",
})
/*Сервис карты.Все настройки можно задавать отсюда*/
export class MapService {
  /*Центр карты */
  Center: number[] | Coordinate = [0, 0];
  /*Уровень приближения карты*/
  Zoom: number = 0;
  constructor() {}
}
