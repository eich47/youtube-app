import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from 'src/app/youtube/services/filter.service';
import { TypeSortEnum } from '../../../pipes/typeSort';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent  {

  @Output() handlerSortByDate = new EventEmitter<TypeSortEnum>();

  // public sortBy: TypeSortEnum = TypeSortEnum.default;

  constructor(private filterService: FilterService) {}

  onClick() {

    // if (this.sortBy === '') {
    //   this.sortBy = TypeSortEnum.abs;
    // } else if (this.sortBy === TypeSortEnum.abs) {
    //   this.sortBy = TypeSortEnum.desc;
    // } else if (this.sortBy === TypeSortEnum.desc) {
    //   this.sortBy = TypeSortEnum.abs;
    // }

    // this.handlerSortByDate.emit(this.sortBy);
    this.filterService.onClickDateSort();


  }

}
