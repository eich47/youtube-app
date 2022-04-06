import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginBlockComponent } from './header/login-block/login-block.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { FilterDateComponent } from './filter-block/filter-date/filter-date.component';
import { FilterCountViewComponent } from './filter-block/filter-count-view/filter-count-view.component';
import { FilterByWordComponent } from './filter-block/filter-by-word/filter-by-word.component';
import { VideoThimbnailComponent } from './search/video-thimbnail/video-thimbnail.component';
import { ViewsCountComponent } from './search/views-count/views-count.component';
import { LikesCountComponent } from './search/likes-count/likes-count.component';
import { DislikesCountComponent } from './search/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './search/comments-count/comments-count.component';
import { VideoTitleComponent } from './search/video-title/video-title.component';
import { MoreButtonComponent } from './search/more-button/more-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultComponent,
    SearchItemComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsComponent,
    LoginBlockComponent,
    FilterBlockComponent,
    FilterDateComponent,
    FilterCountViewComponent,
    FilterByWordComponent,
    VideoThimbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
