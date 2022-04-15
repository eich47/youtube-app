import { Component, Input } from '@angular/core';
import { SearchItemModel } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {

  @Input() video: SearchItemModel = {
    kind: '',
    etag: '',
    id: '',
    snippet: {
      publishedAt: '',
      channelId: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: 0,
          height: 0,
        },
        medium: {
          url: '',
          width: 0,
          height: 0,
        },
        high: {
          url: '',
          width: 0,
          height: 0,
        },
        standard: {
          url: '',
          width: 0,
          height: 0,
        },
        maxres: {
          url: '',
          width: 0,
          height: 0,
        },
      },
      channelTitle: '',
      tags: [],
      categoryId: '',
      liveBroadcastContent: '',
      defaultLanguage: undefined,
      localized: {
        title: '',
        description: '',
      },
      defaultAudioLanguage: '',
    },
    statistics: {
      viewCount: '',
      likeCount: '',
      dislikeCount: '',
      favoriteCount: '',
      commentCount: '',
    },
  };




}
