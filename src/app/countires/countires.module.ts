import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountiresRoutingModule } from './countires-routing.module';
import { CountiresComponent } from './countires.component';


@NgModule({
  declarations: [
    CountiresComponent
  ],
  imports: [
    CommonModule,
    CountiresRoutingModule
  ]
})
export class CountiresModule { }
