import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vc-aspect-ratio-container',
  templateUrl: './aspect-ratio-container.component.html',
  styleUrls: ['./aspect-ratio-container.component.scss']
})
export class AspectRatioContainerComponent implements OnInit {

  @Input()
  aspectRatio = '16:9';
  
  constructor() { }

  ngOnInit(): void {
  }

}
