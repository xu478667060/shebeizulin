import {NgModule} from '@angular/core';

import {TuihuoComponent} from './tuihuo.component';
import {ShareModule} from "../../share/share.module";
import {TuihuoRoutingModule} from "./tuihuo.router";

@NgModule({
  imports: [
    ShareModule,
    TuihuoRoutingModule
  ],
  exports: [],
  declarations: [TuihuoComponent],
  providers: [],
})
export class TuihuoModule {
}
