import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...materialModule,
  ],
  exports: [
    ...materialModule,
  ],
})
export class SharedModule { }
