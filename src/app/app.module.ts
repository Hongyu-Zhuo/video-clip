import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';

import '../assets/fonts/SourceSansPro-Bold.ttf';
import '../assets/fonts/SourceSansPro-Regular.ttf';
import '../assets/fonts/SourceSansPro-Semibold.ttf';
import { NgxDndModule } from 'ngx-dnd';
import { DndBackendService, DND_BACKEND_PROVIDE } from 'projects/ngx-dnd/src';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDndModule
  ],
  providers: [DND_BACKEND_PROVIDE],
  bootstrap: [AppComponent]
})
export class AppModule { }
