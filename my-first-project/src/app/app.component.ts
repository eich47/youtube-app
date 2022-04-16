import { Component } from '@angular/core';
import { TypeSortEnum } from './youtube/pipes/typeSort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';

  public searchQuety = '';

  // public sortByDate: TypeSortEnum = TypeSortEnum.default;

  public sortByView: TypeSortEnum = TypeSortEnum.default;

  public filteredWord: string = '';



  handlerSearchUserRequest(searchStr: string) {
    this.searchQuety = searchStr;
  }

  // onSortByDate(typeSort: TypeSortEnum) {
  //   this.sortByDate = typeSort;
  // }

  onSortByView(typeSort: TypeSortEnum) {
    this.sortByView = typeSort;
  }

  onFilterByWord(word: string) {
    this.filteredWord = word;
  }

  
}
