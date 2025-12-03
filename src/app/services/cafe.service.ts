import { Injectable } from '@angular/core';
import { Cafe } from '../models/cafe';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private cafes: Cafe[] = [
    { id: 'c1', name: 'Luna & Latte', location: 'Colaba, Mumbai', imageUrl: 'assets/images/cafe1.jpg', rating: 4.8, reviewsCount: 128, description: 'Sunlit interiors, specialty lattes, and vinyl records.', tags: ['cozy','plants'] },
    { id: 'c2', name: 'Paper & Pour', location: 'Bandra West, Mumbai', imageUrl: 'assets/images/cafe2.jpg', rating: 4.6, reviewsCount: 94, description: 'Minimalist vibes. Excellent cold brew and pastries.', tags: ['minimal','photogenic'] },
    { id: 'c3', name: 'Willow & Whisk', location: 'Koramangala, Bangalore', imageUrl: 'assets/images/cafe3.jpg', rating: 4.7, reviewsCount: 210, description: 'Open terrace, fairy lights, great for evening hangouts.', tags: ['outdoor','romantic'] }
    ];
    private baseurl:string= 'http://localhost:8080/api/cafe/cafes';   
    constructor(private httpClient:HttpClient) { }

    getAllCafes():Observable<Cafe[]>{
      return this.httpClient.get<any[]>(this.baseurl);
    }

getCafeById(id: string): Observable<Cafe | undefined> { return of(this.cafes.find(c => c.id === id)); }
}
