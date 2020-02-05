import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{ greeting }}</div>
      <div>User name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: lightgray;
      border: 1px solid black;
      margin-top: 5%;
      color: black;
      width: 100%;
      padding-bottom: 3%;
      padding-left: 2%;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
}