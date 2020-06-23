import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';

@Directive({
    selector: '[scFileSelect]',
    exportAs: 'scFileSelect'
})
export class FileSelectDirective implements AfterViewInit, OnDestroy {
    @Input() accept!: string[];
    @Input() directory = false;
    @Input() multiple = false;
    @Output() scFileSelect = new EventEmitter<FileList>();
    private changeListenerSub!: () => void;

    private inputField!: HTMLInputElement;

    constructor(
        private readonly renderer: Renderer2,
        private readonly elementRef: ElementRef,
        private readonly platform: Platform
    ) {}

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
        event.preventDefault();
        if (this.inputField && this.platform.isBrowser) {
            this.inputField.dispatchEvent.apply(this.inputField, [
                new MouseEvent('click')
            ]);
        }
    }

    ngAfterViewInit(): void {
        this.inputField = this.renderer.createElement('input');
        this.renderer.setAttribute(this.inputField, 'type', 'file');

        if (this.accept) {
            this.renderer.setAttribute(
                this.inputField,
                'accept',
                this.accept.join(',')
            );
        }

        if (this.multiple) {
            this.renderer.setAttribute(this.inputField, 'multiple', '');
        }

        if (this.directory) {
            this.renderer.setAttribute(this.inputField, 'directory', '');
            this.renderer.setAttribute(this.inputField, 'webkitdirectory', '');
        }

        this.renderer.setStyle(this.inputField, 'display', 'none');
        this.renderer.appendChild(
            this.elementRef.nativeElement,
            this.inputField
        );
        this.changeListenerSub = this.renderer.listen(this.inputField, 'change', (event: Event) => {
            this.onFileSelected(event);
            this.inputField.value = '';
        });
    }

    ngOnDestroy(): void {
        this.changeListenerSub();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.inputField);
        }
        this.scFileSelect.complete();
    }

    private onFileSelected(event: Event): void {
        const files = (event.target as HTMLInputElement).files;
        if (files) {
            this.scFileSelect.emit(files);
        }
    }
}
