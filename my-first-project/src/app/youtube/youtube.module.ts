import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCountComponent } from './components/search/comments-count/comments-count.component';
import { DislikesCountComponent } from './components/search/dislikes-count/dislikes-count.component';
import { LikesCountComponent } from './components/search/likes-count/likes-count.component';
import { MoreButtonComponent } from './components/search/more-button/more-button.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { VideoThimbnailComponent } from './components/search/video-thimbnail/video-thimbnail.component';
import { VideoTitleComponent } from './components/search/video-title/video-title.component';
import { ViewsCountComponent } from './components/search/views-count/views-count.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewPipe } from './pipes/sort-by-view.pipe';
import { SortByWordPipe } from './pipes/sort-by-word.pipe';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CommentsCountComponent,
    DislikesCountComponent,
    LikesCountComponent,
    MoreButtonComponent,
    SearchResultComponent,
    SearchItemComponent,
    VideoThimbnailComponent,
    VideoTitleComponent,
    ViewsCountComponent,
    BorderColorDirective,
    SortByDatePipe,
    SortByViewPipe,
    SortByWordPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SearchResultComponent],
})
export class YoutubeModule { }
