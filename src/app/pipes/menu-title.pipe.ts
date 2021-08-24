import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'menuTitle'})
export class MenuTitlePipe implements PipeTransform {
  transform(value: string): string {
    const values = value.split('-');
    return values.map(val => `${val.charAt(0).toUpperCase()}${val.substring(1)}`).join(' ');
  }
}