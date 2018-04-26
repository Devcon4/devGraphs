import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { GameObject, Engine } from 'devcanvas';

export class Graph<T> {
  public header?: string = '';
  public xTitle?: string = '';
  public yTitle?: string = '';
  public xUnits?: string = '';
  public yUnits?: string = '';
  public nodes: GraphNode<T>[] = [];

  constructor(args: Partial<Graph<T>>) {
    Object.assign(this, args);
  }
}

export class GraphNode<T> {
  public values: T;
  public name?: string = '';
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent<T> implements OnInit {
  @Input()
  public value: Graph<T>;

  private _textConstructor = () => new GameObject({
    name: 'Text',
    position: {x:0, y:0},
    velocity: {x:0, y:0},
    render: ctx => obj => {
      ctx.textAlign = 'center';
    }
  });

  @ViewChild('canvas') private _canvas: ElementRef;
  private _engine: Engine;

  ngOnInit() {
    this._engine = new Engine(this._canvas.nativeElement, this._canvas.nativeElement.getContext('2d'));
    this._engine.gameObjects.push(this._textConstructor());
    
  }
}
