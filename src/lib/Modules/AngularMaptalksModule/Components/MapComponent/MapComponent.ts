import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Map, Coordinate } from "maptalks";
import { MapService } from "../../../../../public-api";

@Component({
  selector: "MapComponent",
  templateUrl: "./MapComponent.html",
  styleUrls: ["./MapComponent.css"],
})
/*Основной компонент карты */
export default class MapComponent implements OnInit {
  constructor(private MapService: MapService) {}
  /*Уровень приближения карты*/
  @Input()
  Zoom!: number;
  /*Контейнер карты */
  @ViewChild("MapContainer", { static: true })
  MapContainer!: ElementRef<HTMLElement>;
  /*Центр карты */
  @Input()
  Center!: number[] | Coordinate;
  /*Объект карты */
  MapObject!: Map;
  /*Инициализация карты */
  private InitMap() {
    this.MapObject = new Map(this.MapContainer.nativeElement, {
      center: this.GetCenter,
      zoom: this.GetZoom,
    });
  }
  ngOnInit(): void {
    this.InitMap();
  }
  get GetCenter() {
    switch (true) {
      case this.Center !== undefined:
        return this.Center;
      case this.MapService.Center !== undefined:
        return this.MapService.Center;
      default:
        throw new Error("Укажите центр карты");
    }
  }
  get GetZoom() {
    switch (true) {
      case this.Zoom !== undefined:
        return this.Zoom;
      case this.MapService.Zoom !== undefined:
        return this.MapService.Zoom;
      default:
        throw new Error("Укажите уровень приближения для карты");
    }
  }
}
