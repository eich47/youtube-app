import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { SettingsComponent } from './components/header/settings/settings.component';
import { LoginBlockComponent } from './components/header/login-block/login-block.component';
import { FilterBlockComponent } from '../youtube/components/filter-block/filter-block.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilterDateComponent } from '../youtube/components/filter-block/filter-date/filter-date.component';
import { FilterCountViewComponent } from '../youtube/components/filter-block/filter-count-view/filter-count-view.component';
import { FilterByWordComponent } from '../youtube/components/filter-block/filter-by-word/filter-by-word.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent, 
    SearchInputComponent, 
    SettingsComponent, 
    LoginBlockComponent, 
    FilterBlockComponent,
    SearchInputComponent,
    FilterDateComponent,
    FilterCountViewComponent,
    FilterByWordComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
