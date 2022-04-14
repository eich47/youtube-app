import { Component, Input } from '@angular/core';
import { TypeSortEnum } from 'src/app/typeSort';
import { youtubeResponse } from '../../youtubeResponseMock';
import { SearchResponseModel } from '../search-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchQuery: string = '';

  @Input() typeSort:string = TypeSortEnum.desc;

  public data: SearchResponseModel = youtubeResponse;

}
