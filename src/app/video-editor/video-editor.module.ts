import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoEditorRoutingModule } from './video-editor-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VideoEditorComponent } from './video-editor.component';
import { PreviewComponent } from './preview/preview.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ToolbarComponent } from './timeline/toolbar/toolbar.component';


@NgModule({
  declarations: [
    VideoEditorComponent,
    SideMenuComponent,
    PreviewComponent,
    AspectRatioComponent,
    TimelineComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    VideoEditorRoutingModule
  ]
})
export class VideoEditorModule { }
