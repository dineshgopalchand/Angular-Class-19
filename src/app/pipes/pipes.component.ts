import { Component, OnInit } from '@angular/core';

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
    price: 5000000,
    studentCount: 34000,
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
      'Quod asperiores est deleniti, beatae sed maiores molestiae expedita libero eaque architecto?',
    dateValue: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeCase(value: string) {
    return value.toUpperCase();
  }

}
