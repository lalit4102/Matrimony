import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For animations
 import { CommonModule } from '@angular/common';






import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../Components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MarathaMatrimony';

  

}
