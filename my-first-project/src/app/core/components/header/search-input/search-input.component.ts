import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  @Output() searchRequest = new EventEmitter<string>();

  onSubmit(f: NgForm) {
    const value = f.value.search;
    this.searchRequest.emit(value);
  }


}