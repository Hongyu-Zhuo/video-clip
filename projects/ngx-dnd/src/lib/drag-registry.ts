import { DragSourceDirective } from './drag-source/drag-source.directive';
import { DropTarget } from './drop-target/drop-target.directive';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DragRegistry {
  private sources = new Map<string, DragSourceDirective | undefined>();
  private targets = new Map<string, DropTarget | undefined>();

  getSource(id: string): DragSourceDirective | undefined {
    return this.sources.get(id);
  }
  setSource(id: string, source?: DragSourceDirective): void {
    this.sources.set(id, source);
  }
  deleteSource(id: string): void {
    this.sources.delete(id);
  }
  getTarget(id: string): DropTarget | undefined {
    return this.targets.get(id);
  }
  setTarget(id: string, target?: DropTarget): void {
    this.targets.set(id, target);
  }
  deleteTarget(id: string): void {
    this.targets.delete(id);
  }
}
