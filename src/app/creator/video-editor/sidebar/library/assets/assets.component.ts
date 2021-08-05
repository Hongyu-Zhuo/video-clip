import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  asset = '';
  constructor() { }

  ngOnInit(): void {
  }

}
