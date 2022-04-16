import { Injectable } from '@angular/core';
import { TypeSortEnum } from '../pipes/typeSort';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  public sortByDate: TypeSortEnum = TypeSortEnum.default;

  constructor() { }

  public onClickDateSort() {

    if (this.sortByDate === '') {
      this.sortByDate = TypeSortEnum.abs;
    } else if (this.sortByDate === TypeSortEnum.abs) {
      this.sortByDate = TypeSortEnum.desc;
    } else if (this.sortByDate === TypeSortEnum.desc) {
      this.sortByDate = TypeSortEnum.abs;
    }
    // this.handlerSortByDate.emit(this.sortBy);
  }
}
