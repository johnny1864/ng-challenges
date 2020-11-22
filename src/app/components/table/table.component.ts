import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() public tableData = [
    { first: 'Johnny 1', last: 'Jefferson', dob: '12/31/1999' },
    { first: 'Johnny 2', last: 'efferson', dob: '12/31/1989' },
    { first: 'Johnny 3', last: 'fferson', dob: '12/31/1979' },
    { first: 'Johnny 4', last: 'Zefferson', dob: '12/31/1969' },
  ];

  @Output() public headerSelected = new EventEmitter<{key: string, value: any}>();
  constructor() {}

  ngOnInit(): void {}

  public headerSelection(key: string, value: any): void{
    // console.log(value, key);
    this.headerSelected.emit({value, key});
  }
}
