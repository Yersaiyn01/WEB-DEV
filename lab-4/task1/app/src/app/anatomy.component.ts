import { Component } from '@angular/core';

@Component({
  selector: 'app-anatomy',
  template: `
    <h2>Component Anatomy</h2>
    <p>This is a simple Angular component.</p>
  `
})
export class AnatomyComponent {
  title: string = 'Anatomy Component';
}
