import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TuihuoComponent} from "./tuihuo.component";


const routes: Routes = [
  {path: '', component: TuihuoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuihuoRoutingModule {
}

