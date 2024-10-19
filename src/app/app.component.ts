import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from "./pages/bar/bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'booth-reservation';
}
