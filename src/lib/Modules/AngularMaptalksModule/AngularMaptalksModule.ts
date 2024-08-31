import { NgModule } from "@angular/core";
import { MapComponent } from "./Components/MapComponent/MapComponent";
import { MapService } from "./Services/MapService/MapService";
import TileLayerComponent from "./Components/TileLayerComponent/TileLayerComponent";

@NgModule({
  declarations: [MapComponent, TileLayerComponent],
  imports: [],
  exports: [MapComponent, TileLayerComponent],
  providers: [MapService],
})
export class AngularMaptalksModule {}
