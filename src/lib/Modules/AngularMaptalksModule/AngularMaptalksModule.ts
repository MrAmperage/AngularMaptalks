import { NgModule } from "@angular/core";

import {
  MapComponent,
  TileLayerComponent,
  ThreeLayerComponent,
} from "./../../../public-api";

@NgModule({
  declarations: [MapComponent, TileLayerComponent, ThreeLayerComponent],
  imports: [],
  exports: [MapComponent, TileLayerComponent, ThreeLayerComponent],
  providers: [MapComponent],
})
export default class AngularMaptalksModule {}
