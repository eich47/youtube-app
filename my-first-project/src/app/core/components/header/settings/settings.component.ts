import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() handlerSettingClick = new EventEmitter();

  onClick() {
    this.handlerSettingClick.emit();
  }

}
