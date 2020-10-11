import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDndComponent } from './ngx-dnd.component';
import { DndBackendService } from './backends/dnd-backend.service';
import { DragSourceDirective } from './drag-source/drag-source.directive';
import { DropTarget, DropTargetIsOver, DropTargetDragging, IfOver, IfDragging } from './drop-target';
import { DragLayer } from './drag-layer.component';
import { DragSourceDragging } from './drag-source/drag-source-dragging.directive';
import { DragBackend } from './backends/drag-backend';



@NgModule({
  declarations: [
    NgxDndComponent,
    DragSourceDirective,
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
    CommonModule
  ],
  providers: [
    // { provide: DragBackend, useClass: DndBackendService }
  ],
  exports: [
    NgxDndComponent,
    DragSourceDirective,
    DragLayer,
    DragSourceDirective,
    DragSourceDragging,
    DropTarget,
    DropTargetIsOver,
    DropTargetDragging,
    IfOver,
    IfDragging
  ]
})
export class NgxDndModule { }
