import {NgModule} from '@angular/core';

import {MaintainerComponent} from './maintainer.component';
import {ShareModule} from "../../share/share.module";
import {MaintainerRoutingModule} from "./maintainer.router";
import {MaintainDetailComponent} from "../details/maintain-detail/maintain-detail.component";
import {ApplyForMaintainerComponent} from "../details/apply-for-maintainer/apply-for-maintainer.component";

@NgModule({
  imports: [
    ShareModule,
    MaintainerRoutingModule
  ],
  exports: [],
  declarations: [MaintainerComponent,MaintainDetailComponent,ApplyForMaintainerComponent],
  providers: [],
})
export class MaintainerModule {
}
