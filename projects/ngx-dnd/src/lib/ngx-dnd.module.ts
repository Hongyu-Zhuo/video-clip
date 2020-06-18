import { NgModule } from '@angular/core';
import { NgxDndComponent } from './ngx-dnd.component';
import { DndBackendService } from './backend/dnd-backend.service';



@NgModule({
  declarations: [NgxDndComponent],
  imports: [
  ],
  // providers: [DndBackendService],
  exports: [NgxDndComponent]
})
export class NgxDndModule { }
