import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../components/search/search-item.model';

@Pipe({
  name: 'sortByWord',
})
export class SortByWordPipe implements PipeTransform {

  transform(items: SearchItemModel[], ...args: string[]): SearchItemModel[] {
    const word = args[0].toLocaleLowerCase();
    
    return items.filter((item) => {
      const title = item.snippet.title.toLocaleLowerCase();
      return title.includes(word);
    });

  }

}
