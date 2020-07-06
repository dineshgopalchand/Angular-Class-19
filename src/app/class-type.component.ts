import { Component } from '@angular/core';
import { ClassTypeService } from './common/service/class-type.service';
import { ClassesTypeService } from './common/service/classes-type.service';

@Component({
    selector: 'app-class-type',
    template: `
    <div>
        <h3>{{title}} </h3>
        <ul>
            <li *ngFor="let item of classTypeService.classTypeList">
                {{item.name}}
            </li>
        </ul>
    </div>
    `
})
export class ClassTypeComponent {
    title = 'Class Types in Angular';
    constructor(public classTypeService: ClassesTypeService) {
        console.log(this.classTypeService.classTypeList);
    }

}
