import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoEditorComponent } from './creator/video-editor/video-editor.component';

import '../assets/fonts/SourceSansPro-Bold.ttf';
import '../assets/fonts/SourceSansPro-Regular.ttf';
import '../assets/fonts/SourceSansPro-Semibold.ttf';
import { HTML5_DRAG_BACKEND_PROVIDER, NgxDndModule } from 'ngx-dnd';
import { DndBackendService, DND_BACKEND_PROVIDE } from 'ngx-dnd';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDndModule
  ],
  providers: [
    // DND_BACKEND_PROVIDE,
    HTML5_DRAG_BACKEND_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
