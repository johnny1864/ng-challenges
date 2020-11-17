import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES_ROUTES } from './services.routes'
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
    HttpClientModule
  ],
  exports: [],
  providers: [UserService]
})
export class ServicesModule { }
