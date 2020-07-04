import { Component } from '@angular/core';

@Component({
    selector: 'app-class-type',
    template: `
    <div>
        <h3>{{title}} </h3>
        <ul>
            <li>Module</li>
            <li>Component</li>
            <li>Directive</li>
            <li>Pipe</li>
            <li>Service</li>
        </ul>
    </div>
    `
})
export class ClassTypeComponent {
    title = 'Class Types in Angular';

}
