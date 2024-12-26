import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  imports: [CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
slidesStore=
[
  {
    id: 1,
    alt: 'taj',
    src: 'https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=-rQ0EFDuWtGCEnjFTxGoy4CEPlq6w3ncsMZ1vVumUIs='
  },
  {
    id: 2,
    alt: 'Agra',
    src: 'https://media.istockphoto.com/id/498489079/photo/taj-mahal-reflection.webp?a=1&b=1&s=612x612&w=0&k=20&c=zwZtlYQ8pVg7-ritZt27tqAk_BItYLh_LbW14yTfFFo='
  },
  {
    id: 3,
    alt: 'kerala',
    src: 'https://media.istockphoto.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=BaGIQLeJVZAFy3ktpPYfhFhvXNv3yGltWcOzljwZUUc='
  }
]

}