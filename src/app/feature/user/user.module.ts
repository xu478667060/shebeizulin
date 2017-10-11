import {NgModule} from '@angular/core';

import {UserComponent} from './user.component';
import {ShareModule} from "../../share/share.module";
import {UserRoutingModule} from "./user.router";

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  exports: [],
  declarations: [UserComponent],
  providers: [],
})
export class UserModule {
}
