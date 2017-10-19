import {NgModule} from '@angular/core';

import {UserComponent} from './user.component';
import {ShareModule} from "../../share/share.module";
import {UserRoutingModule} from "./user.router";
import {UserDetailComponent} from "../details/user-detail/user-detail.component";
import {UserManageService} from "../../service/user-manage.service";

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [UserComponent,UserDetailComponent],
  providers: [UserManageService],
})
export class UserModule {
}
