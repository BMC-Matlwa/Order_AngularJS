// ordering-management-frontend/src/app/components/login.component.ts
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true, 
    imports: [HttpClientModule, FormsModule,CommonModule], // Add HttpClientModule here
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    this.http.post<any>('http://localhost:3000/api/login', this.user)
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
          // Redirect to the dashboard or another page
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error logging in:', error);
          this.errorMessage = error.error.message || 'An error occurred during login.';
        }
      });
  }
}
