import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { TypeSortEnum } from '../../../pipes/typeSort';
import { SearchResponseModel } from '../search-response.model';
import { SearchItemModel } from '../search-item.model';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchQuery: string = '';

  public typeDateSort:string = TypeSortEnum.desc;

  @Input() word:string = '';

  @Input() sortByViewTipe:TypeSortEnum = TypeSortEnum.default;

  public data: SearchResponseModel | undefined;

  public listVideo:SearchItemModel[] = [];

  constructor(public videoServices: VideoService, public filterService: FilterService) {}

  ngOnInit(): void {
    this.data = this.videoServices.youtubeResponse;
    this.listVideo = this.data.items;
    this.typeDateSort = this.filterService.sortByDate;
    console.log('typeDateSort как получить данные если они обновились в сервисе', this.typeDateSort);
  }

}
