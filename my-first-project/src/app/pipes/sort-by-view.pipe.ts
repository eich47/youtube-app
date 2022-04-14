import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../search/search-item.model';
import { TypeSortEnum } from '../typeSort';

@Pipe({
  name: 'sortByView',
})
export class SortByViewPipe implements PipeTransform {

  transform(items: SearchItemModel[], ...args: TypeSortEnum[]): SearchItemModel[] {
    let result: SearchItemModel[] = [];
    const param = args[0];

    if (param === TypeSortEnum.abs) {
      result = items.sort( (a, b) => +b.statistics.viewCount - +a.statistics.viewCount );
    } else if (param === TypeSortEnum.desc) {
      result = items.sort( (a, b) => +a.statistics.viewCount - +b.statistics.viewCount );
    } else if (param === TypeSortEnum.default) {
      result = items;
    }

    return result;
  
  }

}
