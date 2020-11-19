import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTES } from './other.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(OTHER_ROUTES)
  ]
})
export class OtherModule { }
