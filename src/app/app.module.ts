import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';

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
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    DebounceClickDirective,
    QuoteComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
