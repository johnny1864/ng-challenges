import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  public searchTerm: string = '';
  public hasBeenSelected: boolean = false;
  @Input() public items: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  public updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  public selectSearchTerm(value: string) {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
}
