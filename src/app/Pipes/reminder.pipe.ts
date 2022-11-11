import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ReminderPipe',
})
export class ReminderPipe implements PipeTransform {
  transform(value: number): string {
    let now: number = Date.now();
    let remind: number = Math.floor((now - value) / (24 * 60 * 60 * 1000));
    return remind > 0 ? `${remind} day` : remind === 0 ? 'Today' : 'Pass';
  }
}
