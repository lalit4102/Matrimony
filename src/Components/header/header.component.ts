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
  isLogInOpen = false;

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


  login = {
    username: '',
    password: '',
  };

  openLogIn() {
    this.isLogInOpen = true;
    this.isSignUpOpen = false;  // Close Sign Up if Log In is opened
  }

  closeLogIn() {
    this.isLogInOpen = false;
  }

  loginUser() {
    console.log('User logged in:', this.login);
    this.closeLogIn();
  }

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
