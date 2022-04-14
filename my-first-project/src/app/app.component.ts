import { Component } from '@angular/core';
import { TypeSortEnum } from './typeSort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';

  public searchQuety = '';

  public sortByDate: TypeSortEnum = TypeSortEnum.default;

  handlerSearchUserRequest(searchStr: string) {
    this.searchQuety = searchStr;
  }

  onSortByDate(typeSort: TypeSortEnum) {
    this.sortByDate = typeSort;
  }

  
}
