/*Модуль панели на карте.
Используется в карте и плагинах.
*/

import { NgModule } from "@angular/core";
import MapPanelComponent from "./Components/MapPanelComponent/MapPanelComponent";

@NgModule({
  declarations: [MapPanelComponent],
  imports: [],
  exports: [MapPanelComponent],
  providers: [],
})
export default class AngularMaptalksPanelModule {}
