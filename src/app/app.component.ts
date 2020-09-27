import { Component } from '@angular/core';
import AccordionItem from './components/accordion/accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-challenges';
  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isOpen: false,
    },
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isOpen: false,
    },
  ];
}
