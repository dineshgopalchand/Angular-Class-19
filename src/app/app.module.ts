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
import { CurrencyFormatPipe } from './common/pipes/currency-format.pipe';
import { TextFormatPipe } from './common/pipes/text-format.pipe';
import { SummaryPipe } from './common/pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostListComponent } from './post-list/post-list.component';
import { BasicComponent } from './layout/basic/basic.component';
import { HeaderComponent } from './common/component/header/header.component';
import { SidebarComponent } from './common/component/sidebar/sidebar.component';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    ClassTypeComponent,
    ClassesTypeComponent,
    DisplayDataComponent,
    EventBindingComponent,
    PipesComponent,
    CurrencyFormatPipe,
    TextFormatPipe,
    SummaryPipe,
    FavoriteComponent,
    PostListComponent,
    BasicComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DirectivesModule
  ],
  providers: [
    ClassTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
