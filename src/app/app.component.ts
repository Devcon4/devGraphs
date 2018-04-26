import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Graph } from './bar-graph/bar-graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _timer = interval(10);
  val = 'Hello world!';
  barGraph = new Graph();

  constructor() {
    this._timer.subscribe(n => this.val = `Hello world ${n}`);
  }
}
