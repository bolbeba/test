import { DisplayModalComponent } from './display-modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DisplayModalComponent
  ],
  exports: [
    DisplayModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DisplayModalModule { }
