import {NgModule} from '@angular/core';

import {LeaseComponent} from './lease.component';
import {ShareModule} from "../../share/share.module";
import {LeaseRoutingModule} from "./lease.router";

@NgModule({
  imports: [
    ShareModule,
    LeaseRoutingModule
  ],
  exports: [],
  declarations: [LeaseComponent],
  providers: [],
})
export class LeaseModule {
}
