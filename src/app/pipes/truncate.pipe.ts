import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTruncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string = '', lenght: number = 100): string {
    let availableCharacters = value.slice(0, lenght);

    if (value.length > lenght) {
      availableCharacters += '...';
    }

    return availableCharacters;
  }
}
