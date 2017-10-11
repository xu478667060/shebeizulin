import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from "../../share/share.module";
import {IndexRoutingModule} from "./index.router";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";


@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  exports: [],
  declarations: [
    IndexComponent,
    DeviceDetailComponent
  ],
  providers: [],
})
export class IndexModule {
}
