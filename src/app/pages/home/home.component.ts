import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { AboutComponent } from '../../components/about/about.component';
import { EditionsComponent } from '../../components/editions/editions.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { AliadosComponent } from '../../components/aliados/aliados.component';
import { NoticiasComponent } from '../../components/noticias/noticias.component';


@Component({
  selector: 'app-home',
  standalone: true,


  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    EditionsComponent,
    SubscribeComponent,
    AliadosComponent,
    NoticiasComponent],


  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
