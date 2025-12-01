import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CafeService } from '../../services/cafe.service';

@Component({
  selector: 'app-cafe-detail',
  imports: [CommonModule],
  templateUrl: './cafe-detail.component.html',
  styleUrl: './cafe-detail.component.css'
})
export class CafeDetailComponent implements OnInit {
  cafe: any;
  constructor(private route: ActivatedRoute, private svc: CafeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!; this.svc.getCafeById(id).subscribe(c=>this.cafe=c);
  }

}
