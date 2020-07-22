import { Component, HostBinding, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'vc-drop-indicator',
    templateUrl: './drop-indicator.component.html',
    styleUrls: ['./drop-indicator.component.scss']
})
export class DropIndicatorComponent {
    @Input()
    actions!: TemplateRef<any>;
    @HostBinding('class.active')
    @Input()
    active = false;
}
