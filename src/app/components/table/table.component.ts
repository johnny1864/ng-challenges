import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() public tableData = [
    { first: 'Johnny 1', last: 'Jefferson', dob: '12/31/1999' },
    { first: 'Johnny 2', last: 'Jefferson', dob: '12/31/1999' },
    { first: 'Johnny 3', last: 'Jefferson', dob: '12/31/1999' },
    { first: 'Johnny 4', last: 'Jefferson', dob: '12/31/1999' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
