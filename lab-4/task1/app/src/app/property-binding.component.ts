import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h2>Property Binding</h2>
    <img [src]="imageUrl" width="200">
  `
})
export class PropertyBindingComponent {
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
