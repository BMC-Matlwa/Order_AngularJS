// ordering-management-frontend/src/app/components/login.component.ts
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],  // Add HttpClientModule here
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <label>Email: <input [(ngModel)]="email" name="email" required></label><br>
      <label>Password: <input [(ngModel)]="password" name="password" type="password" required></label><br>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    console.log('Login attempt with:', this.email, this.password);
    this.http.post('/api/login', { email: this.email, password: this.password })
      .subscribe((res: any) => {
        console.log('Login successful:', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      }, err => {
        console.error('Login failed:', err);
        alert(err.error.error || 'Invalid credentials');
      });
  }
  
  
}
