import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {

  courseList = [
    {
      id: 1,
      name: 'Angularjs',
      specification: {
        duration: 30
      }
    },
    {
      id: 2,
      name: 'Angular 2',
      specification: {
        duration: 30
      }
    },
    {
      id: 4,
      name: 'Angular 4'
    },
    {
      id: 5,
      name: 'Angular 5',
      specification: {
        duration: 50
      }
    },
    {
      id: 6,
      name: 'Angular 6'
    },
    {
      id: 7,
      name: 'Angular 7'
    },
    {
      id: 8,
      name: 'Angular 8'
    },
    {
      id: 9,
      name: 'Angular 9'
    },
    {
      id: 10,
      name: 'Angular 10'
    }
  ];

  showCourse = true;

  constructor() { }

  ngOnInit(): void {
  }

}
