import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  onLike() {
    this.likeProduct.emit(this.product.id);
  }

  onDelete() {
    if (confirm(`Are you sure you want to delete "${this.product.name}"?`)) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check this product ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
