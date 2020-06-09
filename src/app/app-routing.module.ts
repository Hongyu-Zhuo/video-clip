import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'editor',
    loadChildren: () => import('./video-editor/video-editor.module').then(m => m.VideoEditorModule)
  },
  {
    path: '**',
    redirectTo: 'editor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
