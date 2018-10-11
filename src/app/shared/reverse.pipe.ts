import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    console.log(args);
    let result: string[] = [];
    let len = value.length;
    while(len--) {
      result.push(value[len]);
    }
    return result.join('');
  }

}
