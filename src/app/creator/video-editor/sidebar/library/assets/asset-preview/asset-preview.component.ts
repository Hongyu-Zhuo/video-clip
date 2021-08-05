import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-asset-preview',
  templateUrl: './asset-preview.component.html',
  styleUrls: ['./asset-preview.component.scss']
})
export class AssetPreviewComponent implements OnInit {

  @Input() asset!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
