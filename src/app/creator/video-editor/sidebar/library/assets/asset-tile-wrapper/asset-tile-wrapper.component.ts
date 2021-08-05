import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'vc-asset-tile-wrapper',
    templateUrl: './asset-tile-wrapper.component.html',
    styles: ['./asset-tile-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetTileWrapperComponent {
    // @Input()
    // asset!: Asset;
    // @Input()
    // freeStock!: string[];
    // @Input()
    // isReady!: boolean;
    // @Input()
    // permanentUrl!: string;

    // @Input()
    // dndNew!: boolean;

    // @Input()
    // dragReadContext!: Subject<DragReadContextType>;

    // @Input()
    // dragWriteContext!: Subject<DragWriteContextType>;

    // @Input()
    // scalingContext!: Subject<ScalingContextType>;

    // @ViewChild('reactNode', { static: true })
    // protected reactNodeRef!: ElementRef;

    // constructor(
    //     elementRef: ElementRef,
    //     changeDetectorRef: ChangeDetectorRef,
    //     renderer: Renderer2,
    //     readonly soundWave: SoundwaveService,
    //     readonly thumbnail: AssetThumbnailService,
    //     readonly ownership: OwnershipService,
    //     readonly store: Store
    // ) {
    //     super(elementRef, changeDetectorRef, renderer);
    // }
}
