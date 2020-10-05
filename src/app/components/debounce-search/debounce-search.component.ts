import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent implements OnInit, OnDestroy {
  public searchTerm: string = '';
  @Input() public placeholder = '';
  @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();
  constructor() {}

  ngOnInit(): void {
    this.searchUpdate$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        this.searchUpdate.emit(value);
      });
  }

  ngOnDestroy() {
    this.searchUpdate$.unsubscribe();
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
