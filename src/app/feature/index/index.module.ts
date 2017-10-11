import {NgModule} from '@angular/core';

import {IndexComponent} from './index.component';
import {ShareModule} from "../../share/share.module";
import {IndexRoutingModule} from "./index.router";

@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  exports: [],
  declarations: [IndexComponent],
  providers: [],
})
export class IndexModule {
}
