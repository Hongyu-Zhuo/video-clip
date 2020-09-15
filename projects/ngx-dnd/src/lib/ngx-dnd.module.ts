import { NgModule } from '@angular/core';
import { NgxDndComponent } from './ngx-dnd.component';
import { DndBackendService } from './backend/dnd-backend.service';
import { DragSourceDirective } from './drag-source/drag-source.directive';
import { DragLayer, DragSourceDragging } from '../public-api';
import { DropTarget, DropTargetIsOver, DropTargetDragging, IfOver, IfDragging } from './drop-target';



@NgModule({
  declarations: [
    NgxDndComponent, DragSourceDirective,
    DragLayer,
    DragSourceDirective,
    DragSourceDragging,
    DropTarget,
    DropTargetIsOver,
    DropTargetDragging,
    IfOver,
    IfDragging
  ],
  imports: [
  ],
  // providers: [DndBackendService],
  exports: [NgxDndComponent]
})
export class NgxDndModule { }
