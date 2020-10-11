import { Injectable, OnDestroy, Provider } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DndBackendService implements OnDestroy {
    unsubscribe = new Subject();

    constructor() {
        this.init(window);
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    init(eventTarget: any) {
        console.log('dnd init');

        const dragstart$ = fromEvent(eventTarget, 'dragstart') as Observable<DragEvent>;
        const dragend$ = fromEvent(eventTarget, 'dragend') as Observable<DragEvent>;
        const dragover$ = fromEvent(eventTarget, 'dragover') as Observable<DragEvent>;
        const dragleave$ = fromEvent(eventTarget, 'dragleave') as Observable<DragEvent>;
        const drop$ = fromEvent(eventTarget, 'drop') as Observable<DragEvent>;

        dragstart$.pipe(tap(this.handleGlobalDragStart),takeUntil(this.unsubscribe)).subscribe();
        dragend$.pipe(tap(this.handleGlobalDragEnd),takeUntil(this.unsubscribe)).subscribe();
        dragover$.pipe(tap(this.handleGlobalDragOver),takeUntil(this.unsubscribe)).subscribe();
        dragleave$.pipe(tap(this.handleGlobalDragLeave),takeUntil(this.unsubscribe)).subscribe();
        drop$.pipe(tap(this.handleGlobalDragDrop),takeUntil(this.unsubscribe)).subscribe();
    }
    handleGlobalDragDrop(e: DragEvent): void {
        e.preventDefault();
        throw new Error('Method not implemented.');
    }
    handleGlobalDragLeave(e: DragEvent): void {
        e.preventDefault();

        throw new Error('Method not implemented.');
    }
    handleGlobalDragOver(e: DragEvent): void {
        e.preventDefault();

        throw new Error('Method not implemented.');
    }
    handleGlobalDragEnd(e: DragEvent): void {
        e.preventDefault();

        throw new Error('Method not implemented.');
    }
    handleGlobalDragStart(e: DragEvent): void {
        e.preventDefault();

        throw new Error('Method not implemented.');
    }
}

export function DndBackendFactory() {
    return new DndBackendService();
}
export const DND_BACKEND_PROVIDE: Provider = {
    provide: DndBackendService,
    useFactory: DndBackendFactory
}