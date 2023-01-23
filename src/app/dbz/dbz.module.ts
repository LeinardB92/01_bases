import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainpageComponent
  ]
})

export class DbzModule { }
