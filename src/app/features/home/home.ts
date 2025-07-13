import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <div class="home-container">
      <div class="home-card">
        <div class="home-header">
          <h1>Bienvenido a Heikoh</h1>
          <p>Elige una opción para continuar</p>
        </div>
        
        <div class="home-actions">
          <button class="action-btn login-btn" (click)="goToLogin()">
            <div class="btn-content">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Iniciar Sesión</span>
            </div>
            <p class="btn-description">Ya tienes una cuenta? Accede aquí</p>
          </button>
          
          <div class="divider">
            <span>o</span>
          </div>
          
          <button class="action-btn register-btn" (click)="goToRegister()">
            <div class="btn-content">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              <span>Crear Cuenta</span>
            </div>
            <p class="btn-description">Nuevo aquí? Regístrate gratis</p>
          </button>
        </div>
        
        <div class="home-footer">
          <p>Al continuar, aceptas nuestros términos y condiciones</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .home-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      padding: 40px;
      width: 100%;
      max-width: 500px;
      animation: fadeInUp 0.6s ease-out;
    }

    .home-header {
      text-align: center;
      margin-bottom: 40px;

      h1 {
        color: #333;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 12px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      p {
        color: #666;
        font-size: 16px;
        margin: 0;
      }
    }

    .home-actions {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .action-btn {
      width: 100%;
      padding: 20px;
      border: 2px solid #e1e5e9;
      border-radius: 12px;
      background: white;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }

      &.login-btn:hover {
        border-color: #667eea;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      }

      &.register-btn:hover {
        border-color: #764ba2;
        background: linear-gradient(135deg, rgba(118, 75, 162, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%);
      }
    }

    .btn-content {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .btn-icon {
      width: 24px;
      height: 24px;
      color: #667eea;
    }

    .btn-content span {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    .btn-description {
      color: #666;
      font-size: 14px;
      margin: 0;
      padding-left: 36px;
    }

    .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 20px 0;

      &::before,
      &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #e1e5e9;
      }

      span {
        padding: 0 16px;
        color: #999;
        font-size: 14px;
        font-weight: 500;
      }
    }

    .home-footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e1e5e9;

      p {
        color: #999;
        font-size: 12px;
        margin: 0;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 480px) {
      .home-container {
        padding: 10px;
      }

      .home-card {
        padding: 30px 20px;
      }

      .home-header h1 {
        font-size: 28px;
      }
    }
  `]
})
export class Home {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
} 