import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-context',
  template: `
    <p>
      context works!
    </p>
  `,
  styles: [
  ]
})
export class ContextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
