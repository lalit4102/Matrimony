import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isSignUpOpen = false;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  openSignUp() {
    this.isSignUpOpen = true;
  }

  closeSignUp() {
    this.isSignUpOpen = false;
  }

  registerUser() {
    console.log('User registered:', this.user);
    this.closeSignUp();
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
