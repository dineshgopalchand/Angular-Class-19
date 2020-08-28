import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIntroductionComponent } from './directive-introduction/directive-introduction.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [DirectiveIntroductionComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveIntroductionComponent,
    TabComponent
  ]
})
export class DirectivesModule { }
