import {NgModule} from '@angular/core';
import {DeviceListComponent} from './device-list.component';
import {ShareModule} from "../../share/share.module";
import {DeviceListRoutingModule} from "./device-list.router";


@NgModule({
  imports: [
    ShareModule,
    DeviceListRoutingModule
  ],
  exports: [],
  declarations: [DeviceListComponent],
  providers: [],
})
export class DeviceListModule {
}
