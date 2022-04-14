import { Component, EventEmitter, Output } from '@angular/core';
import { TypeSortEnum } from '../../typeSort';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent  {

  @Output() handlerSortByDate = new EventEmitter<TypeSortEnum>();

  public sortBy: TypeSortEnum = TypeSortEnum.default;

  onClick() {

    if (this.sortBy === '') {
      this.sortBy = TypeSortEnum.abs;
    } else if (this.sortBy === TypeSortEnum.abs) {
      this.sortBy = TypeSortEnum.desc;
    } else if (this.sortBy === TypeSortEnum.desc) {
      this.sortBy = TypeSortEnum.abs;
    }

    this.handlerSortByDate.emit(this.sortBy);
  }

}
