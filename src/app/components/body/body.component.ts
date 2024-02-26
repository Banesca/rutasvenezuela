import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AliadosComponent } from '../aliados/aliados.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FooterComponent, AliadosComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
