import { Pipe, PipeTransform } from '@angular/core';
import { isDate } from 'util';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(isDate(value)){
      let arr = value.toString().split(" ");
      return arr[2]+"-"+arr[1]+"-"+arr[3]
    }
    return value;
  }

}
