/*
This class is for
setting up dependancies eg. bootstap after installing with the terminal
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // lists all the components which shoul be known to angular at time of inspectiong
})
export class AppModule { }
