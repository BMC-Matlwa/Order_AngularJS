// ordering-management-frontend/src/app/components/register.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Add this import


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <label>Name: <input [(ngModel)]="name" name="name" required></label><br>
      <label>Email: <input [(ngModel)]="email" name="email" required></label><br>
      <label>Password: <input [(ngModel)]="password" name="password" type="password" required></label><br>
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('/api/register', { name: this.name, email: this.email, password: this.password })
      .subscribe(() => {
        alert('Registration successful');
        this.router.navigate(['/']);
      }, (err) => alert('Registration failed: ' + err.error.error));
  }
}
