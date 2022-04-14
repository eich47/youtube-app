import { Component, EventEmitter, Output } from '@angular/core';
import { TypeSortEnum } from '../typeSort';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export class FilterBlockComponent  {

  @Output() handlerSortByDate = new EventEmitter<TypeSortEnum>();

  onSortByDate(sortByDate: TypeSortEnum) {
    this.handlerSortByDate.emit(sortByDate);
  }

}
