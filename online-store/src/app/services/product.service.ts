import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
   
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with A16 chip. High performance and great camera.',
      price: 599000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android smartphone with amazing display and camera.',
      price: 489000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h6b/69065016377374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/hed/69065019523102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-sirenevyi-108915896/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Apple iPhone 17 Pro Max 256Gb Orange',
      description: 'Apple iPhone 17 Pro Max 256Gb is the embodiment of innovation and style, offering impeccable performance.',
      price: 803897,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Redmi A3x 3 ГБ/64 ГБ Black',
      description: 'Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном.',
      price: 39900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'Samsung Galaxy A26 5G 8 ГБ/256 ГБ White',
      description: 'Samsung Galaxy A26 5G 8 ГБ/256 ГБ — это мощный и стильный смартфон с поддержкой 5G.',
      price: 127960,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/p38/30556010.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/p38/30556010.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p77/p38/30556012.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p38/30556013.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a26-5g-8-gb-256-gb-belyi-136435860/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    
    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'Apple MacBook Air M1 13.3',
      description: 'Powerful MacBook Air with M1 chip. Perfect for professionals and everyday use.',
      price: 549000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'HP Pavilion 15 Intel Core i5',
      description: 'Reliable HP laptop with Intel Core i5 processor and 8GB RAM for productive work.',
      price: 299900,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/he0/82089216835614.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h33/he0/82089216835614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hb2/82089217032222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/82089217228830.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-dos-15-eg3015ci-7p4e1ea-uuq-111968436/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'ASUS VivoBook 15 AMD Ryzen 5',
      description: 'ASUS VivoBook with AMD Ryzen 5 processor, 8GB RAM and 512GB SSD for everyday computing.',
      price: 329000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p94/pad/45179668.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p94/pad/45179668.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pad/45179669.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pab/45179670.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-bez-os-90nb0x21-m00vr0-140466251/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Lenovo IdeaPad 5 Intel Core i7',
      description: 'Lenovo IdeaPad 5 with Intel Core i7, 16GB RAM and 512GB SSD. Great for multitasking.',
      price: 499000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h23/84991833899038.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h23/84991833899038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/84991833964574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15-6-16-gb-ssd-1000-gb-win-11-pro-15irh8-83em004wrk-116139285/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Dell Inspiron 15 AMD Ryzen 7',
      description: 'Dell Inspiron 15 with powerful AMD Ryzen 7 processor and 16GB RAM.',
      price: 789990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8a/p63/88670249.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/p63/88670249.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p02/p61/88670251.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/acer-nitro-v-16-ai-amd-ryzen-7-260-16gb-ssd-1tb-rtx-5070-8gb-dos-nh-u1fer-002-16-16-gb-ssd-1000-gb-bez-os-nh-u1fer-002-152800224/?c=750000000',
      categoryId: 2,
      likes: 0
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'Apple AirPods 4 White',
      description: 'Apple AirPods 4 with personalized spatial audio and adaptive equalizer.',
      price: 60480,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Sony WH-CH720N Black',
      description: 'Sony wireless headphones with noise cancelling and 35-hour battery life.',
      price: 28990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h43/heb/84717301956638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h54/84717302022174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h43/84717302087710.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-ch720n-chernyi-110128274/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'JBL Tune 660NC Black',
      description: 'JBL Tune 660NC with active noise cancellation and 44-hour battery life.',
      price: 19990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Beats Studio Pro Black',
      description: 'Beats Studio Pro with Personalized Spatial Audio and lossless audio quality.',
      price: 89990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h68/83490668085278.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h68/83490668085278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/hbe/83490668871710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h79/83490669658142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-beats-studio-pro-chernyi-113105971/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Sennheiser HD 660S Black',
      description: 'Sennheiser HD 660S professional reference headphones with exceptional sound quality.',
      price: 129990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h9e/63771720876062.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h9e/63771720876062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h95/63771721203742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/hf1/63771721695262.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-hd-280-pro-chernyi-4802294/?c=750000000',
      categoryId: 3,
      likes: 0
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'iPad Air 11 Wi-Fi 128GB',
      description: 'iPad Air 11 with M1 chip, stunning display and advanced features for creativity.',
      price: 449000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-11-x-elite-13-djuim-16-gb-512-gb-chernyi-128764672/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 11',
      description: 'Samsung Galaxy Tab S9 11 with 120Hz display and AMOLED technology.',
      price: 329990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Lenovo Tab P12 Pro',
      description: 'Lenovo Tab P12 Pro with 2K display, Snapdragon 870 and 10100mAh battery.',
      price: 219990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/22753489.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/pd0/22753490.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-idea-tab-pro-tb373fu-acc-12-7-djuim-8-gb-256-gb-seryi-134113446/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'iPad Pro 11 128GB Wi-Fi',
      description: 'iPad Pro 11 with M2 chip, Liquid Retina display and ProMotion technology.',
      price: 529000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Microsoft Surface Go 3',
      description: 'Microsoft Surface Go 3 with Intel Pentium Gold and 10.5 TouchScreen display.',
      price: 289990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-11-x-elite-13-djuim-16-gb-512-gb-chernyi-128764672/?c=750000000',
      categoryId: 4,
      likes: 0
    }
  ];
 
  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  incrementLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
