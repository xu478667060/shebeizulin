import {NgModule} from '@angular/core';

import {GpsListComponent} from './gps-list.component';
import {ShareModule} from "../../share/share.module";
import {GpsListRoutingModule} from "./gps-list.router";
import {DeviceManageService} from "../../service/device-manage.service";

@NgModule({
  imports: [
    ShareModule,
    GpsListRoutingModule
  ],
  exports: [],
  declarations: [GpsListComponent],
  providers: [DeviceManageService],
})
export class GpsListModule {
}
