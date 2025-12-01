import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CafeListComponent } from './pages/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './pages/cafe-detail/cafe-detail.component';

export const routes: Routes = [{
  path:'', component:HomePageComponent
},
{path:'cafes', component:CafeListComponent},
{path:'cafes/:id', component:CafeDetailComponent},
{ path: '**', redirectTo: '' }];
