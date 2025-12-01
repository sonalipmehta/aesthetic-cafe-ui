import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './shared/topbar/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TopbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aesthetic-cafe-ui';
}
