import { Component, Input } from '@angular/core';
import { youtubeResponse } from '../../youtubeResponseMock';
import { SearchResponseModel } from '../search-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchQuery: string = '';

  public data: SearchResponseModel = youtubeResponse;

}
