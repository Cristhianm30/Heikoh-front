import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <button (click)="logout()" class="logout-btn">Cerrar Sesión</button>
      </div>
      
      <div class="user-info" *ngIf="currentUser">
        <h2>Bienvenido, {{ currentUser.username }}!</h2>
        <div class="user-details">
          <p><strong>Email:</strong> {{ currentUser.email }}</p>
          <p><strong>Rol:</strong> {{ currentUser.role }}</p>
          <p><strong>Estado:</strong> {{ currentUser.enabled ? 'Activo' : 'Inactivo' }}</p>
          <p><strong>Fecha de creación:</strong> {{ currentUser.createdAt | date:'medium' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #e1e5e9;
    }
    
    .dashboard-header h1 {
      color: #333;
      margin: 0;
    }
    
    .logout-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.3s ease;
    }
    
    .logout-btn:hover {
      background: #c0392b;
    }
    
    .user-info {
      background: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .user-info h2 {
      color: #333;
      margin-bottom: 20px;
    }
    
    .user-details p {
      margin: 10px 0;
      color: #666;
    }
    
    .user-details strong {
      color: #333;
    }
  `]
})
export class Dashboard implements OnInit {
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 