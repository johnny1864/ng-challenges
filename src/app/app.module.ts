import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { APP_ROUTES } from './app.routes';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    TopOfPageComponent,
    DocumentationComponent,
    DirectivesDocumentationComponent,
    ServicesDocumentationComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
