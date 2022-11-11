import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ReminderPipe',
})
export class ReminderPipe implements PipeTransform {
  transform(value: number): number {
    let now = Date.now();
    return Math.floor((now - value) / (24 * 60 * 60 * 1000));
  }
}
