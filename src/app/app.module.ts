import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassTypeComponent } from './class-type.component';
import { ClassesTypeComponent } from './classes-type/classes-type.component';
import { ClassTypeService } from './common/service/class-type.service';
import { DisplayDataComponent } from './display-data/display-data.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassTypeComponent,
    ClassesTypeComponent,
    DisplayDataComponent,
    EventBindingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ClassTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
