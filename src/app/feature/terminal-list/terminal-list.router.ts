import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TerminalListComponent} from "./terminal-list.component";


const routes: Routes = [
  {path: '', component: TerminalListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminalListRoutingModule {
}

