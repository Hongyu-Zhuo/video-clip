import { ReactWrapperComponent } from '@angular-react/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { AssetThumbnailService } from '@app/creator/thumbnail/asset-thumbnail.service';
import { OwnershipService } from '@app/payment/ownership/ownership.service';
import { SoundwaveService } from '@app/shared/media-ui/components/sound-wave/soundwave.service';
import { Asset } from '@clipchamp/supercut';
import { AssetTileProps } from './AssetTile';
import { DragReadContextType, DragWriteContextType } from '@clipchamp/dnd';
import { Subject } from 'rxjs';
import { ScalingContextType } from '@app/creator/editor/timeline/Timeline.util';
import { Store } from '@ngxs/store';

@Component({
    selector: 'vc-asset-tile-wrapper',
    templateUrl: './asset-tile-wrapper.component.html',
    styles: ['react-renderer'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetTileWrapperComponent extends ReactWrapperComponent<AssetTileProps> {
    @Input()
    asset!: Asset;
    @Input()
    freeStock!: string[];
    @Input()
    isReady!: boolean;
    @Input()
    permanentUrl!: string;

    @Input()
    dndNew!: boolean;

    @Input()
    dragReadContext!: Subject<DragReadContextType>;

    @Input()
    dragWriteContext!: Subject<DragWriteContextType>;

    @Input()
    scalingContext!: Subject<ScalingContextType>;

    @ViewChild('reactNode', { static: true })
    protected reactNodeRef!: ElementRef;

    constructor(
        elementRef: ElementRef,
        changeDetectorRef: ChangeDetectorRef,
        renderer: Renderer2,
        readonly soundWave: SoundwaveService,
        readonly thumbnail: AssetThumbnailService,
        readonly ownership: OwnershipService,
        readonly store: Store
    ) {
        super(elementRef, changeDetectorRef, renderer);
    }
}
