import { NgModule } from "@angular/core";

import {
  MapComponent,
  TileLayerComponent,
  MapService,
} from "./../../../public-api";

@NgModule({
  declarations: [MapComponent, TileLayerComponent],
  imports: [],
  exports: [MapComponent, TileLayerComponent],
  providers: [MapService],
})
export default class AngularMaptalksModule {}
