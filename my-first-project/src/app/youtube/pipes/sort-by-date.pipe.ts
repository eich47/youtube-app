import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../components/search/search-item.model';
import { TypeSortEnum } from './typeSort';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {

  transform(items: SearchItemModel[], ...args: string[]): SearchItemModel[] {
    const param = args[0];
    console.log(param);
    let result: SearchItemModel[] = [];
    if (param === TypeSortEnum.abs) {
      result = items.sort( (a, b) => 
        this.dateStingToDateNumber(b.snippet.publishedAt) - this.dateStingToDateNumber(a.snippet.publishedAt),
      );
    }

    if (param === TypeSortEnum.desc) {
      result = items.sort( (a, b) => 
        this.dateStingToDateNumber(a.snippet.publishedAt) - this.dateStingToDateNumber(b.snippet.publishedAt),
      );
    }

    if (param === '') {
      result = items;
    }

    return result; 
  }

  private dateStingToDateNumber(date:string): number {
    return new Date(date).getTime();
  }

}
