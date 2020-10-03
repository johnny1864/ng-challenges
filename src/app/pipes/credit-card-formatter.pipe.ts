import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Number';
    }
    if (!this.isAllNumber(cardNumber)) {
      return 'Invalid Characters';
    }
    return this.formatCardNumber(cardNumber);
  }

  private isAllNumber(cardNumber: string): boolean {
    const stringArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber
      .split('')
      .filter((char) => stringArray.includes(char));

    return totalValidCharacters.length === cardNumber.length;
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoveryVisaCardLength = 12;
    const isAmericanExpressCardLength = 16;

    if (
      cardNumberLength === isMasterDiscoveryVisaCardLength ||
      cardNumberLength === isAmericanExpressCardLength
    ) {
      return true;
    }

    return false;
  }

  private formatCardNumber(cardNumber: string): string {
    const parts = String(cardNumber).match(/[\s\S]{1,4}/g) || [];

    return parts.join('-');
  }
}
