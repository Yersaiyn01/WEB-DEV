import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <h2>Input Component</h2>
    <p>Received message: {{ message }}</p>
  `
})
export class InputComponent {
  @Input() message: string = '';
}


