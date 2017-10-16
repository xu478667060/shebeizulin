import {NgModule} from '@angular/core';
import {DeviceListComponent} from './device-list.component';
import {ShareModule} from "../../share/share.module";
import {DeviceListRoutingModule} from "./device-list.router";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";


@NgModule({
  imports: [
    ShareModule,
    DeviceListRoutingModule,

  ],
  exports: [],
  declarations: [DeviceListComponent , DeviceDetailComponent],
  providers: [],
})
export class DeviceListModule {
}
