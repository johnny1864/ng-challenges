import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() public quote: string = '';
  @Input() public author: string = '';
  @Input() public occupation: string = '';
  constructor() {}

  ngOnInit(): void {}
}
