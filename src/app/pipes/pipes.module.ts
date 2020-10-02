import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';

@NgModule({
  declarations: [PipesDocumentationComponent],
  exports: [PipesDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
