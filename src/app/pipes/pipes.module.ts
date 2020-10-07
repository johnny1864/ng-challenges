import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { TruncatePipe } from './truncate.pipe';
import { FlattenPipe } from './flatten.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PipesDocumentationComponent,
    CreditCardFormatterPipe,
    TruncatePipe,
    FlattenPipe,
  ],
  exports: [
    PipesDocumentationComponent,
    CreditCardFormatterPipe,
    TruncatePipe,
    FlattenPipe,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
