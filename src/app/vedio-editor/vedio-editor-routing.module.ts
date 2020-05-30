import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VedioEditorComponent } from './vedio-editor.component';


const routes: Routes = [
  {
    path: '', component: VedioEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VedioEditorRoutingModule { }
