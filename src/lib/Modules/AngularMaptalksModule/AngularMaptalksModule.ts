import { NgModule } from "@angular/core";
import { MapComponent } from "./Components/MapComponent/MapComponent";
import { MapService } from "./Services/MapService/MapService";

@NgModule({
  declarations: [MapComponent],
  imports: [],
  exports: [MapComponent],
  providers: [MapService],
})
export class AngularMaptalksModule {}
