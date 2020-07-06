// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClassTypeService } from '../common/service/class-type.service';
import { ClassesTypeService } from '../common/service/classes-type.service';

@Component({
  selector: 'app-classes-type',
  templateUrl: './classes-type.component.html',
  styleUrls: ['./classes-type.component.scss']
})
export class ClassesTypeComponent implements OnInit {

  title = 'Classes Types in Angular';

  // constructor(public ctService: ClassTypeService, private cdt: ChangeDetectorRef) { }
  constructor(public ctService: ClassesTypeService) { }

  ngOnInit(): void {
  }
  addNewClassType() {
    this.ctService.classTypeList.push({
      id: Date.now(),
      name: 'some type' + Date.now()
    });
    // this.cdt.detectChanges();
  }

}
