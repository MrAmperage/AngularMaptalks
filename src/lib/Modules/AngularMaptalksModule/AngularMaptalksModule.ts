import { NgModule } from "@angular/core";
import {
  MapComponent,
  MapService,
  ThreeLayerComponent,
  TileLayerComponent,
  VectorLayerComponent,
  WMSTileLayerComponent,
} from "../../../public-api";

@NgModule({
  declarations: [
    MapComponent,
    TileLayerComponent,
    ThreeLayerComponent,
    VectorLayerComponent,
    WMSTileLayerComponent,
  ],
  imports: [],
  exports: [
    MapComponent,
    TileLayerComponent,
    ThreeLayerComponent,
    VectorLayerComponent,
    WMSTileLayerComponent,
  ],
  providers: [MapService],
})
export default class AngularMaptalksModule {}
