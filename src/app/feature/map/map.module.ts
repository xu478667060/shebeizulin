import {NgModule} from '@angular/core';

import {MapComponent} from './map.component';
import {ShareModule} from "../../share/share.module";
import {MapRoutingModule} from "./map.router";

@NgModule({
  imports: [
    ShareModule,
    MapRoutingModule
  ],
  exports: [],
  declarations: [MapComponent],
  providers: [],
})
export class MapModule {
}
