import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  template: `
    <h2>Event Handling</h2>
    <button (click)="increase()">Click Me</button>
    <p>Count: {{ count }}</p>
  `
})
export class EventHandlingComponent {
  count: number = 0;

  increase() {
    this.count++;
  }
}
