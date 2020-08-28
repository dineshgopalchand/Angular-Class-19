import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIntroductionComponent } from './directive-introduction/directive-introduction.component';
import { TabComponent } from './tab/tab.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';



@NgModule({
  declarations: [DirectiveIntroductionComponent, TabComponent, AttributeDirectiveComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveIntroductionComponent,
    TabComponent
  ]
})
export class DirectivesModule { }
