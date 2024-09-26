import { NgModule } from "@angular/core";
import {
  MapComponent,
  MapService,
  ThreeLayerComponent,
  TileLayerComponent,
  VectorLayerComponent,
} from "../../../public-api";

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
