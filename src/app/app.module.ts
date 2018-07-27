import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/store';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
