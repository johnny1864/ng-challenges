import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent implements OnInit {

  public sortDirection = true;
  @Input() public tableData = [
    { first: 'Johnny 1', last: 'Jefferson', dob: '12/31/1999', living: true, age: 74 },
    { first: 'Johnny 2', last: 'efferson', dob: '12/31/1989' , living: true, age: 34},
    { first: 'Johnny 3', last: 'fferson', dob: '12/31/1979', living: true, age: 44 },
    { first: 'Johnny 4', last: 'Zefferson', dob: '12/31/1969', living: false, age: 54 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  sortTable(headerData: {key: string, value: any}):void{
    const {key, value} = headerData;

    if(typeof value === 'boolean'){
      this.sortBoolean(key);
    }else if(typeof value === 'number'){
      this.sortNumber(key);
    }else if(this.isDate(value)){
      this.sortDate(key);
    }else if(typeof value === 'string'){
      this.sortString(key);
    }


    this.sortDirection = !this.sortDirection;
  }

  private sortBoolean(key: string):void{
    this.tableData.sort((value1: any, value2: any) => {
      if(this.sortDirection){
        return Number(value1[key]) - Number(value2[key]);
      }else{
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortNumber(key: string): void{
    this.tableData.sort((value1: any, value2: any) => {
      if(this.sortDirection){
        return Number(value1[key]) - Number(value2[key]);
      }else{
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortString(key: string){
    this.tableData.sort((value1: any, value2: any) => {
      value1 = value1[key].toLowerCase();
      value2 = value2[key].toLowerCase();

      if(this.sortDirection){
        if(value1 > value2){
          return -1;
        }

        if(value1 < value2){
          return 1;
        }

        return 0;
      }else{
        if(value1 > value2){
          return 1;
        }

        if(value1 < value2){
          return -1;
        }

        return 0;
      }


    });
  }

  private isDate(value): boolean{
    var parseDate = Date.parse(value);

    return isNaN(value) && !isNaN(parseDate);
  }

  private sortDate(key: any): void{
    this.tableData.sort((value1: any, value2: any) => {
      if(this.sortDirection){
        return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
      }else{
        return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
      }
    });
  }

}
