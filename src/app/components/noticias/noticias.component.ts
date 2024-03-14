import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    console.log('isExpanded', this.isExpanded);
  }

}
