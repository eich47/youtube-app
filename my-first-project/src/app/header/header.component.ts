import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeSortEnum } from '../typeSort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() searchQuery: string = '';

  @Output() searchUserRequest = new EventEmitter<string>();

  @Output() handlerTypeSortByDate = new EventEmitter<TypeSortEnum>();

  @Output() handlerSortByView = new EventEmitter<TypeSortEnum>();

  public toggleSettins: boolean = false;

  handlerSearchRequest(userStr: string) {
    // console.log(userStr);
    this.searchQuery = userStr;
    this.searchUserRequest.emit(userStr);
  }

  onSettingsClick() {
    this.toggleSettins = !this.toggleSettins;
  }

  onSortByDate(sortType: TypeSortEnum) {
    console.log('header');
    this.handlerTypeSortByDate.emit(sortType);
  }

  onSortByView(sortType: TypeSortEnum) {
    this.handlerSortByView.emit(sortType);
  }
}
