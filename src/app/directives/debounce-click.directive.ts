import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    const debounceTimeMS = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeMS))
      .subscribe((val) => this.debounceClick.emit(val));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) public clickEvent(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
