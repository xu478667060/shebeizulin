import {NgModule} from '@angular/core';

import {MaintainComponent} from './maintain.component';
import {ShareModule} from "../../share/share.module";
import {MaintainRoutingModule} from "./maintain.router";

@NgModule({
  imports: [
    ShareModule,
    MaintainRoutingModule
  ],
  exports: [],
  declarations: [MaintainComponent],
  providers: [],
})
export class MaintainModule {
}
