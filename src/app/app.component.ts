import { DndBackendService } from 'projects/ngx-dnd/src';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-clip';
  constructor(
    private dnd: DndBackendService
  ) {

  }
}
