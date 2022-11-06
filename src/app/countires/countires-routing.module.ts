import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountiresComponent } from './countires.component';

const routes: Routes = [{ path: '', component: CountiresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountiresRoutingModule { }
