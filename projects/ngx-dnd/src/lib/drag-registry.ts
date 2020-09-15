import { DragSource } from './drag-source/drag-source.directive';
import { DropTarget } from './drop-target/drop-target.directive';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DragRegistry {
  private sources = new Map<string, DragSource>();
  private targets = new Map<string, DropTarget>();

  getSource(id: string): DragSource {
    return this.sources.get(id);
  }
  setSource(id: string, source?: DragSource): void {
    this.sources.set(id, source);
  }
  deleteSource(id: string): void {
    this.sources.delete(id);
  }
  getTarget(id: string): DropTarget {
    return this.targets.get(id);
  }
  setTarget(id: string, target?: DropTarget): void {
    this.targets.set(id, target);
  }
  deleteTarget(id: string): void {
    this.targets.delete(id);
  }
}
