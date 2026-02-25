import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  template: `
    <h2>Output Component</h2>
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class OutputComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }
}
