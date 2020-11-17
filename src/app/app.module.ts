import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { SharedModule } from './shared/shared.module';
import { RippleDirective } from './directives/ripple.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DebounceClickDirective,
    ServicesDocumentationComponent,
    DirectivesDocumentationComponent,
    RippleDirective,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
