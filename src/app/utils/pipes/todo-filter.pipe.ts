import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
