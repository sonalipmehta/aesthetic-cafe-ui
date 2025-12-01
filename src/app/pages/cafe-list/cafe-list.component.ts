import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CafeCardComponent } from '../../shared/cafe-card/cafe-card/cafe-card.component';
import { RouterLink } from '@angular/router';
import { Cafe } from '../../models/cafe';
import { CafeService } from '../../services/cafe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cafe-list',
  imports: [CommonModule, CafeCardComponent, RouterLink, FormsModule],
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];
  filtered: Cafe[] = [];
  query = '';

  constructor(private cafeService: CafeService){

  }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(list => { this.cafes = list; this.filtered = list; });
  }

  onSearch(){ const q = this.query.trim().toLowerCase(); this.filtered = q ? this.cafes.filter(c => c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || (c.tags||[]).some(t=>t.includes(q))) : this.cafes; }


}
