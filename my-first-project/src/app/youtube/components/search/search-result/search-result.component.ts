import { Component, Input } from '@angular/core';
import { TypeSortEnum } from '../../../pipes/typeSort';
import { youtubeResponse } from '../../../services/youtubeResponseMock';
import { SearchResponseModel } from '../search-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchQuery: string = '';

  @Input() typeSort:string = TypeSortEnum.desc;

  @Input() word:string = '';

  @Input() sortByViewTipe:TypeSortEnum = TypeSortEnum.default;

  public data: SearchResponseModel = youtubeResponse;

}
