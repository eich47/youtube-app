import { Component, EventEmitter, Output } from '@angular/core';
import { TypeSortEnum } from '../../pipes/typeSort';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export class FilterBlockComponent  {

  @Output() handlerSortByDate = new EventEmitter<TypeSortEnum>();

  @Output() handlerSortByView = new EventEmitter<TypeSortEnum>();

  @Output() handlerFilterByWord = new EventEmitter<string>();

  onSortByDate(sortByDate: TypeSortEnum) {
    this.handlerSortByDate.emit(sortByDate);
  }

  onSortByView(sortType: TypeSortEnum) {
    this.handlerSortByView.emit(sortType);
  }

  onFilterByWord(word: string) {
    this.handlerFilterByWord.emit(word);
  }

}
