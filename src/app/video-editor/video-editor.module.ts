import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { VideoEditorRoutingModule } from './video-editor-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VideoEditorComponent } from './video-editor.component';
import { PreviewComponent } from './preview/preview.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ToolbarComponent } from './timeline/toolbar/toolbar.component';
import { ControlsComponent } from './preview/controls/controls.component';
import { AspectRatioContainerComponent } from './preview/aspect-ratio-container/aspect-ratio-container.component';
import { TimelineRulerComponent } from './timeline/timeline-ruler/timeline-ruler.component';
import { TrackComponent } from './timeline/track/track.component';
import { TrackItemComponent } from './timeline/track-item/track-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LibraryComponent } from './sidebar/library/library.component';
import { FileDropZoneComponent } from './sidebar/library/file-drop-zone/file-drop-zone.component';


@NgModule({
  declarations: [
    VideoEditorComponent,
    SideMenuComponent,
    PreviewComponent,
    AspectRatioComponent,
    TimelineComponent,
    ToolbarComponent,
    ControlsComponent,
    AspectRatioContainerComponent,
    TimelineRulerComponent,
    TrackComponent,
    TrackItemComponent,
    SidebarComponent,
    LibraryComponent,
    FileDropZoneComponent
  ],
  imports: [
    CommonModule,
    VideoEditorRoutingModule,
    MatIconModule
  ]
})
export class VideoEditorModule { }
