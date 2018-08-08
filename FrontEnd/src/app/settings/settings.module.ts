import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import {DialogsModule} from 'eds-angular4';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SettingsService} from './settings/settings.service';

@NgModule({
  imports: [
    CommonModule,
    DialogsModule,
    NgbModule
  ],
  declarations: [SettingsComponent],
  providers: [SettingsService]
})
export class SettingsModule { }
