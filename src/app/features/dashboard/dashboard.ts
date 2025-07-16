import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth/services/auth';
import { FormatDataService } from '../../shared/services/format-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header header">
        <h1>Dashboard</h1>
        <button (click)="logout()" class="btn-primary">Cerrar Sesión</button>
      </div>
      
      <div class="user-info card" *ngIf="currentUser">
        <h2>Bienvenido, {{ currentUser.username }}!</h2>
        <div class="user-details">
          <p><strong>Email:</strong> {{ currentUser.email }}</p>
          <p><strong>Rol:</strong> {{ formatRole(currentUser.role) }}</p>
          <p><strong>Estado:</strong> {{ formatStatus(currentUser.enabled) }}</p>
          <p><strong>Fecha de creación:</strong> {{ formatCreatedAt(currentUser.createdAt) }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      min-height: 100vh;
      background-color: var(--primary-bg);
      background-image: 
        radial-gradient(circle at 20% 80%, var(--hud-cyan) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, var(--hud-magenta) 0%, transparent 50%);
      background-size: 400px 400px;
      background-repeat: no-repeat;
    }
    
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 6px 0 var(--hud-black);
      position: relative;
      background: linear-gradient(135deg, var(--hud-beige) 0%, var(--hud-light) 100%);
    }
    
    .dashboard-header::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--hud-orange), var(--hud-green));
      border-radius: 14px;
      z-index: -1;
    }
    
    .dashboard-header h1 {
      background: transparent !important;
      color: var(--hud-dark-gray);
      font-size: 2.8rem;
      font-weight: 900;
      letter-spacing: 2px;
      border-radius: 0;
      padding: 22px 0 18px 0;
      margin-bottom: 28px;
      margin-top: 0;
      text-align: center;
      font-family: 'Patrick Hand', cursive;
      box-shadow: none;
      border: none;
      position: relative;
      width: 100%;
      display: block;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--hud-dark-gray);
      text-shadow: 2px 2px 0 var(--hud-beige);
    }
    .dashboard-header h1::after {
      content: '';
      display: block;
      width: 90%;
      height: 5px;
      background: var(--hud-orange);
      border-radius: 0 0 8px 8px;
      margin: 12px auto 0 auto;
    }
    
    .user-info {
      background: var(--hud-light);
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 8px 0 var(--hud-black);
      border-left: 6px solid var(--hud-cyan);
      position: relative;
    }
    
    .user-info::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--hud-cyan), var(--hud-magenta));
      border-radius: 14px;
      z-index: -1;
    }
    
    .user-info h2 {
      color: var(--hud-almost-black);
      margin-bottom: 25px;
      font-weight: 700;
      border-bottom: 3px solid var(--hud-orange);
      padding-bottom: 15px;
      font-size: 24px;
      text-shadow: 1px 1px 0 var(--hud-light), 2px 2px 0 var(--hud-black);
      background: linear-gradient(135deg, var(--hud-almost-black) 0%, var(--hud-dark-gray) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .user-details p {
      margin: 18px 0;
      color: var(--hud-dark-gray);
      font-size: 16px;
      padding: 12px 0;
      border-bottom: 2px solid var(--hud-beige);
      font-weight: 500;
      position: relative;
    }
    
    .user-details p::before {
      content: '▶';
      color: var(--hud-cyan);
      margin-right: 10px;
      font-size: 14px;
    }
    
    .user-details strong {
      color: var(--hud-almost-black);
      font-weight: 700;
      min-width: 140px;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    @media (max-width: 768px) {
      .dashboard-container {
        padding: 10px;
      }
      
      .dashboard-header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
      
      .user-info {
        padding: 20px;
      }
      
      .dashboard-header h1 {
        font-size: 24px;
      }
      
      .user-info h2 {
        font-size: 20px;
      }
    }
  `]
})
export class Dashboard implements OnInit {
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formatDataService: FormatDataService
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

  formatRole(role: string): string {
    return this.formatDataService.formatRole(role);
  }

  formatCreatedAt(createdAt: string): string {
    return this.formatDataService.formatDate(createdAt, 'long');
  }

  formatStatus(enabled: boolean): string {
    return this.formatDataService.formatStatus(enabled);
  }
} 