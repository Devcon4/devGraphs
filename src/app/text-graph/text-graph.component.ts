import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GameObject, Engine } from 'devcanvas';

@Component({
  selector: 'app-text-graph',
  templateUrl: './text-graph.component.html',
  styleUrls: ['./text-graph.component.css']
})
export class TextGraphComponent implements OnInit {

  @Input()
  public value: string = '';

  private _textConstructor = () => new GameObject({
    name: 'Text',
    position: {x:0, y:0},
    velocity: {x:0, y:0},
    render: ctx => obj => {
      ctx.textAlign = 'center';
      ctx.fillText(this.value, obj.position.x, obj.position.y, this._engine.size.width);
    }
  });

  @ViewChild('canvas') private _canvas: ElementRef;
  private _engine: Engine;

  ngOnInit() {
    this._engine = new Engine(this._canvas.nativeElement, this._canvas.nativeElement.getContext('2d'));
    this._engine.gameObjects.push(this._textConstructor());
    
  }

}
