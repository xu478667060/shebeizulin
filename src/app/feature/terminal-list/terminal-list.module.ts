import {NgModule} from '@angular/core';

import {TerminalListComponent} from './terminal-list.component';
import {ShareModule} from "../../share/share.module";
import {TerminalListRoutingModule} from "./terminal-list.router";

@NgModule({
  imports: [
    ShareModule,
    TerminalListRoutingModule
  ],
  exports: [],
  declarations: [TerminalListComponent],
  providers: [],
})
export class TerminalListModule {
}
