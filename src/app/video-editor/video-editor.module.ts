import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoEditorRoutingModule } from './video-editor-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VideoEditorComponent } from './video-editor.component';


@NgModule({
  declarations: [VideoEditorComponent, SideMenuComponent],
  imports: [
    CommonModule,
    VideoEditorRoutingModule
  ]
})
export class VideoEditorModule { }
