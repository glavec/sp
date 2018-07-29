import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/store';
import { HeaderComponent } from './components/general/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { FiltersComponent } from './components/student/filters/filters.component';
import {MatSelectModule} from '@angular/material/select';
import { SearchPanelComponent } from './components/student/search-panel/search-panel.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/student/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FiltersComponent,
    SearchPanelComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
