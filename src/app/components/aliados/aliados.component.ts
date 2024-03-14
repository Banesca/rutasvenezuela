import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-aliados',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './aliados.component.html',
  styleUrl: './aliados.component.scss'
})
export class AliadosComponent {

  customOptions: OwlOptions = {
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    navText: ['<', '>'],
    nav: true,
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
  }
}

