import {NgModule} from '@angular/core';

import {FapiaoComponent} from './fapiao.component';
import {ShareModule} from "../../share/share.module";
import {FapiaoRoutingModule} from "./fapiao.router";

@NgModule({
  imports: [
    ShareModule,
    FapiaoRoutingModule
  ],
  exports: [],
  declarations: [FapiaoComponent],
  providers: [],
})
export class FapiaoModule {
}
