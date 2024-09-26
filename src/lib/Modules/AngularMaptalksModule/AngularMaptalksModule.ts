import { NgModule } from "@angular/core";

import {
  MapComponent,
  TileLayerComponent,
  ThreeLayerComponent,
  VectorLayerComponent,
} from "./../../../public-api";
import { MapService } from "../../../public-api";

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
  providers: [MapService],
})
export default class AngularMaptalksModule {}
