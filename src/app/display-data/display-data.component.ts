import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  titleVal = 'Course Details';
  description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ';
  description1 = '<b>Lorem</b> ipsum dolor, sit amet consectetur adipisicing elit. ';
  imgSrc = 'https://picsum.photos/200/300';
  rowSpan = 2;
  colSpan = 2;

  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }
  showTitle() {
    return this.titleVal;
  }
  toggelButton() {
    this.isActive = !this.isActive;
  }

}
