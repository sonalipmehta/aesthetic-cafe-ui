import { Component, Input } from '@angular/core';
import { Cafe } from '../../../models/cafe';

@Component({
  selector: 'app-cafe-card',
  imports: [],
  templateUrl: './cafe-card.component.html',
  styleUrl: './cafe-card.component.css'
})
export class CafeCardComponent {
  @Input() cafe!: Cafe;

}
