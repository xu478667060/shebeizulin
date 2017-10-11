import {NgModule} from '@angular/core';

import {ExpenseComponent} from './expense.component';
import {ShareModule} from "../../share/share.module";
import {ExpenseRoutingModule} from "./expense.router";

@NgModule({
  imports: [
    ShareModule,
    ExpenseRoutingModule
  ],
  exports: [],
  declarations: [ExpenseComponent],
  providers: [],
})
export class ExpenseModule {
}
