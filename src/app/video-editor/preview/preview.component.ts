import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-preview',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
