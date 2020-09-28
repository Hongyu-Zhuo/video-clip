import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoEditorComponent } from './video-editor.component';


const routes: Routes = [
  {
    path: '', component: VideoEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoEditorRoutingModule { }
