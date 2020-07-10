import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyType: string = '$'): string {
    let formattedValue = '';
    if (value >= 1000000000) {
      formattedValue = currencyType + '' + value / 1000000000 + 'B';
    } else
      if (value >= 1000000) {
        formattedValue = currencyType + '' + value / 1000000 + 'M';
      } else
        if (value >= 1000) {
          formattedValue = currencyType + '' + value / 1000 + 'K';
        } else {
          formattedValue = currencyType + '' + value;
        }
    return formattedValue;
  }

}
