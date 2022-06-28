import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
import { DropIndicatorComponent } from '../../shared/drop-indicator/drop-indicator.component';
import { FileSelectDirective } from '../../shared/file-select/file-select.directive';
import { AssetsComponent } from './sidebar/library/assets/assets.component';
import { NgxDndModule } from 'ngx-dnd';
import { AssetTileWrapperComponent } from './sidebar/library/assets/asset-tile-wrapper/asset-tile-wrapper.component';
import { AssetPreviewComponent } from './sidebar/library/assets/asset-preview/asset-preview.component';
import { VideoContextDirective } from '../video-context/video-context.directive';


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
    FileDropZoneComponent,
    DropIndicatorComponent,

    FileSelectDirective,

    AssetsComponent,

    AssetTileWrapperComponent,

    AssetPreviewComponent,

    VideoContextDirective
  ],
  imports: [
    CommonModule,
    VideoEditorRoutingModule,
    MatIconModule,
    MatButtonModule,
    NgxDndModule
  ]
})
export class VideoEditorModule { }
