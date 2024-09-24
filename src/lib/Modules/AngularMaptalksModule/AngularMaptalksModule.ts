import { NgModule } from "@angular/core";

import {
  MapComponent,
  TileLayerComponent,
  ThreeLayerComponent,
  VectorLayerComponent,
} from "./../../../public-api";

@NgModule({
  declarations: [
    MapComponent,
    TileLayerComponent,
    ThreeLayerComponent,
    VectorLayerComponent,
  ],
  imports: [],
  exports: [
    MapComponent,
    TileLayerComponent,
    ThreeLayerComponent,
    VectorLayerComponent,
  ],
  providers: [MapComponent],
})
export default class AngularMaptalksModule {}
