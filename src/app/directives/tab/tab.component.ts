import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {

  activeTab = 'post';

  constructor() { }
  // constructor(private cdc: ChangeDetectorRef) { }

  ngOnInit(): void {

    // this.cdc.detectChanges(); // tell angular to detect changes

  }

}
