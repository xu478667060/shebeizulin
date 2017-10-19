import {NgModule} from '@angular/core';

import {TerminalListComponent} from './terminal-list.component';
import {ShareModule} from "../../share/share.module";
import {TerminalListRoutingModule} from "./terminal-list.router";
import {DeviceManageService} from "../../service/device-manage.service";

@NgModule({
  imports: [
    ShareModule,
    TerminalListRoutingModule
  ],
  exports: [],
  declarations: [TerminalListComponent],
  providers: [DeviceManageService],
})
export class TerminalListModule {
}
