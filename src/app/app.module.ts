import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DebounceClickDirective,
    ServicesDocumentationComponent,
    DirectivesDocumentationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
