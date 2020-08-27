import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-introduction',
  templateUrl: './directive-introduction.component.html',
  styleUrls: ['./directive-introduction.component.scss']
})
export class DirectiveIntroductionComponent implements OnInit {

  isSaved = true;

  name = 'sit';
  number = 20;

  courseList = [
    {
      id: 1,
      name: 'Angularjs'
    },
    {
      id: 2,
      name: 'Angular 2'
    },
    {
      id: 4,
      name: 'Angular 4'
    },
    {
      id: 5,
      name: 'Angular 5'
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

  constructor() { }

  ngOnInit(): void {
    for (const course of this.courseList) {
      console.log(course);
    }
  }
  toggleSave() {
    this.isSaved = !this.isSaved;
  }

  addCourse() {
    this.courseList.push({
      id: Date.now(),
      name: 'Angular' + Date.now()
    });
  }

  trackByID(index: number, value: any): number {
    console.log(value, index);
    return value.id;
  }

}
