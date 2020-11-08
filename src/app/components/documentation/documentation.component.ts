import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  title: string = 'ng-challenges';
  progressValue: number = 0;
  toggleValue: boolean = false;
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
  tabs = [
    {title: 'Tab 1', active: true},
    {title: 'Tab 2', active: false}
  ];
  public selectedTab = 0;
  constructor() {
    setTimeout(() => {
      this.progressValue = 25;
    }, 1000);
  }

  

  ngOnInit(): void {}

  public debounceExample(value: string): void {
    console.log('Component Documention ' + value);
  }
}
