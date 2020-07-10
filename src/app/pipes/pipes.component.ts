import { Component, OnInit } from '@angular/core';
import { TextFormatPattern } from '../common/pipes/text-format.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titleValue = 'PIPEs InTroDuCtion';

  courseDetails = {
    name: 'Angular Course',
    rating: 4.5643,
    rating1: 4.5,
    rating2: 4,
    price: 5003030,
    studentCount: 34000,
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
      'Quod asperiores est deleniti, beatae sed maiores molestiae expedita libero eaque architecto?' +
      'Quod asperiores est deleniti, beatae sed maiores molestiae expedita libero eaque architecto?',
    dateValue: new Date()
  };
  showMore = true;
  showMoreLength = 100;

  textFormatParams: TextFormatPattern = {
    color: ['#f00', '#0f0', '#00f']
  };

  constructor() { }

  ngOnInit(): void {
  }
  toggelShowMore() {
    this.showMore = !this.showMore;
  }

  changeCase(value: string) {
    return value.toUpperCase();
  }

}
