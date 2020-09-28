import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vcr-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  activeMenu!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
