import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent implements OnInit {
  @Input() public creditCardNumber = '';
  private readOnly = false;
  public get isReadOnly() {
    return this.readOnly;
  }
  @Input() public set isReadOnly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatNumber(this.creditCardNumber)
      : this.creditCardNumber;
    this.readOnly = value;
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.creditCardNumber);
  }

  private formatNumber(num: string): string {
    const parts = String(num).match(/[\s\S]{1,4}/g) || [];

    const last4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return last4Shown.join('-');
  }
}
