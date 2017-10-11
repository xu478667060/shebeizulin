import {NgModule} from '@angular/core';

import {MaintainerComponent} from './maintainer.component';
import {ShareModule} from "../../share/share.module";
import {MaintainerRoutingModule} from "./maintainer.router";

@NgModule({
  imports: [
    ShareModule,
    MaintainerRoutingModule
  ],
  exports: [],
  declarations: [MaintainerComponent],
  providers: [],
})
export class MaintainerModule {
}
