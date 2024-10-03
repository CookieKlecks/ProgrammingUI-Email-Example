import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterArrayImpure',
  pure: false,
  standalone: true
})
export class FilterArrayImpurePipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(array: T[], filter: string, requiredAttributes: string[] = []): T[] {
    const compareString = filter.toLowerCase();

    return array.filter((item: { [key: string]: any }) => {
      for (let requiredAttribute of requiredAttributes) {
        if (!item.hasOwnProperty(requiredAttribute)) {
          return false;
        }
        if (typeof item[requiredAttribute] === 'string' && item[requiredAttribute] === '') {
          return false;
        }
      }

      for (let key in item) {
        let value = item[key]
        if (typeof value === 'string' && value.toLowerCase().includes(compareString)) {
          return true
        }
      }
      return false;
    });
  }

}
