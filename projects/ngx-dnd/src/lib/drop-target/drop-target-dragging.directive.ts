import {
  ContentChild,
  Directive,
  Input,
  AfterContentInit,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { DropTarget } from './drop-target.directive';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[vcDropTargetDragging]',
  exportAs: 'vcDropTargetDragging'
})
export class DropTargetDragging implements AfterContentInit, OnDestroy {
  isActive = false;

  @ContentChild(DropTarget) target!: DropTarget;

  @Input()
  set vcDropTargetDragging(data: string[] | string) {
    const isActive = this.isActive;
    if (this.isActive && this.classList.length > 0) {
      this.classList.map(c => {
        this.renderer.removeClass(this.elementRef.nativeElement, c);
      });
      this.isActive = false;
    }
    const classes = Array.isArray(data) ? data : data.split(' ');
    this.classList = classes.filter(c => !!c);
    this.update(isActive);
  }

  private classList: string[] = [];
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    if (!this.target) {
      return;
    }
    this.subscription = this.target.dragging.subscribe((isDragging: boolean) => this.update(isDragging));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private update(isDragging: boolean): void {
    if (!this.target) {
      return;
    }

    Promise.resolve().then(() => {
      if (this.isActive !== isDragging) {
        this.isActive = isDragging;
        this.classList.map(c => {
          if (isDragging) {
            this.renderer.addClass(this.elementRef.nativeElement, c);
          } else {
            this.renderer.removeClass(this.elementRef.nativeElement, c);
          }
        });
      }
    });
  }
}
