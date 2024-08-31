import { NgModule } from "@angular/core";

import { MapComponent, TileLayerComponent } from "./../../../public-api";

@NgModule({
  declarations: [MapComponent, TileLayerComponent],
  imports: [],
  exports: [MapComponent, TileLayerComponent],
  providers: [MapComponent],
})
export default class AngularMaptalksModule {}
