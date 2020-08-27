import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIntroductionComponent } from './directive-introduction/directive-introduction.component';



@NgModule({
  declarations: [DirectiveIntroductionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveIntroductionComponent
  ]
})
export class DirectivesModule { }
