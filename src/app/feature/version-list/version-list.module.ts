import {NgModule} from '@angular/core';

import {VersionListComponent} from './version-list.component';
import {ShareModule} from "../../share/share.module";
import {VersionListRoutingModule} from "./version-list.router";
import {DeviceManageService} from "../../service/device-manage.service";

@NgModule({
  imports: [
    ShareModule,
    VersionListRoutingModule
  ],
  exports: [],
  declarations: [VersionListComponent],
  providers: [DeviceManageService],
})
export class VersionListModule {
}
