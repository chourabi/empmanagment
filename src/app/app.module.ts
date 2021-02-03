import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListempComponent } from './listemp/listemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { DetailsempComponent } from './detailsemp/detailsemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListempComponent,
    AddempComponent,
    DetailsempComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
