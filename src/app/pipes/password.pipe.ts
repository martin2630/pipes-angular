import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activo = false): any {
    let array: string[] = [];
    let len = value.length

    for (let x = 0; x < len; x++) {
      array.push('*');
    }
    if (activo) {
      return value.replace(value, array.join(''));
      // return '*'.repeat(value.length);
    }else {
      return value;
    }
    // return  activo ? value.replace(/./g, '*') : value;
  }

}
