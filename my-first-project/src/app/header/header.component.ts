import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() searchQuery: string = '';

  @Output() searchUserRequest = new EventEmitter<string>();

  public toggleSettins: boolean = false;

  handlerSearchRequest(userStr: string) {
    // console.log(userStr);
    this.searchQuery = userStr;
    this.searchUserRequest.emit(userStr);
  }

  onSettingsClick() {
    this.toggleSettins = !this.toggleSettins;
  }
}
