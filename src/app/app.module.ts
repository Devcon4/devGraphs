import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TextGraphComponent } from './text-graph/text-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    TextGraphComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
