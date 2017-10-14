import {NgModule} from '@angular/core';
import {BusinessInformationComponent} from './business-information.component';
import {ShareModule} from "../../../share/share.module";
import {BusinessInformationRoutingModule} from "./business-information.router";

@NgModule({
  imports: [
    ShareModule,
    BusinessInformationRoutingModule
  ],
  exports: [],
  declarations: [BusinessInformationComponent],
  providers: [],
})
export class BusinessInformationModule {
}
