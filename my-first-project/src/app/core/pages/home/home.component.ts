import { Component } from '@angular/core';
import { TypeSortEnum } from 'src/app/youtube/pipes/typeSort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {


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
