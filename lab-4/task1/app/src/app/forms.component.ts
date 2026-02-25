import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `
    <h2>Forms Example</h2>
    <input [(ngModel)]="name" placeholder="Enter your name">
    <p>Hello {{ name }}</p>
  `
})
export class FormsComponent {
  name: string = '';
}
