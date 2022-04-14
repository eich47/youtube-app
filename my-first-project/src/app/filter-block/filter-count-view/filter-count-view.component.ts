import { Component, EventEmitter, Output } from '@angular/core';
import { TypeSortEnum } from '../../typeSort';

@Component({
  selector: 'app-filter-count-view',
  templateUrl: './filter-count-view.component.html',
  styleUrls: ['./filter-count-view.component.scss'],
})
export class FilterCountViewComponent  {

  @Output() handlerSortByView = new EventEmitter<TypeSortEnum>();

  public sortBy: TypeSortEnum = TypeSortEnum.default;

  onClick() {
    if (this.sortBy === TypeSortEnum.default) {
      this.sortBy = TypeSortEnum.abs;
    } else if (this.sortBy === TypeSortEnum.abs) {
      this.sortBy = TypeSortEnum.desc;
    } else if (this.sortBy === TypeSortEnum.desc) {
      this.sortBy = TypeSortEnum.abs;
    }

    this.handlerSortByView.emit(this.sortBy);

  }

}
