import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from "../../share/share.module";
import {IndexRoutingModule} from "./index.router";
import {TerraceComponent} from "../terrace/terrace.component";



@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  exports: [],
  declarations: [
    IndexComponent,
    TerraceComponent
  ],
  providers: [],
})
export class IndexModule {
}
