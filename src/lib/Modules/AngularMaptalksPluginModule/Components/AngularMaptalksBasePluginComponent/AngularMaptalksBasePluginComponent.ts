import { Component, Input, OnInit } from "@angular/core";
/*Абстрактный класс для наследования остальных плагинов */
@Component({
  selector: "AngularMaptalksBasePluginComponent",
  templateUrl: "./AngularMaptalksBasePluginComponent.html",
})
export default abstract class AngularMaptalksBasePluginComponent
  implements OnInit
{
  /*Цвет иконки */
  @Input()
  IconColor: `#${string}` = "#ffffff";
  /*Цвет фона */
  @Input()
  BackgroundColor: `#${string}` = "#002140";

  abstract InitPlugin();

  ngOnInit(): void {
    this.InitPlugin();
  }
}
