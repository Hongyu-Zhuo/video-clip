import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VedioEditorRoutingModule } from './vedio-editor-routing.module';
import { VedioEditorComponent } from './vedio-editor.component';


@NgModule({
  declarations: [
    VedioEditorComponent
  ],
  imports: [
    CommonModule,
    VedioEditorRoutingModule
  ]
})
export class VedioEditorModule { }
