import { Component, OnInit } from "@angular/core";

@Component({
  selector: "MapComponent",
  templateUrl: "./MapComponent.html",
  styleUrls: ["./MapComponent.css"],
})
/*Основной компонент карты */
export class MapComponent implements OnInit {
  /*Инициализация карты */
  InitMap() {}
  ngOnInit(): void {
    this.InitMap();
  }
}
