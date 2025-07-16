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
      background-color: var(--hud-beige);
      background-image: none;
      padding: 20px;
    }

    .home-card {
      background: var(--hud-light);
      border: 3px solid var(--hud-black);
      border-radius: 16px;
      box-shadow: 0 8px 0 var(--hud-black);
      padding: 40px;
      width: 100%;
      max-width: 550px;
      animation: fadeInUp 0.6s ease-out;
      position: relative;
    }

    .home-card::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 18px;
      z-index: -1;
    }

    .home-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .home-header h1 {
      background: transparent;
      color: var(--hud-dark-gray);
      font-size: 2.8rem;
      font-weight: 900;
      letter-spacing: 2px;
      border-radius: 0;
      padding: 22px 0 18px 0;
      margin-bottom: 28px;
      margin-top: 0;
      text-align: center;
      font-family: 'Cartoonist Hand', cursive;
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
    .home-header h1::after {
      content: '';
      display: block;
      width: 90%;
      height: 5px;
      background: var(--hud-orange);
      border-radius: 0 0 8px 8px;
      margin: 12px auto 0 auto;
    }

    .home-header p {
      color: var(--hud-dark-gray);
      font-size: 18px;
      margin: 0;
      font-weight: 500;
      font-family: 'Cartoonist Hand', cursive;
    }

    .home-actions {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .action-btn {
      width: 100%;
      padding: 16px;
      border: 3px solid var(--hud-black);
      border-radius: 10px;
      background: var(--hud-light);
      color: var(--hud-almost-orange);
      font-family: 'Cartoonist Hand', cursive;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 0 var(--hud-black);
      text-align: center;
      margin-bottom: 10px;
    }
    .action-btn:hover:not(:disabled) {
      background-color: var(--hud-orange);
      color: white;
      border-color: var(--hud-black);
      box-shadow: 0 6px 0 var(--hud-black);
    }
    .action-btn:active:not(:disabled) {
      transform: translateY(2px);
      box-shadow: 0 2px 0 var(--hud-black);
    }
    .action-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: 0 4px 0 var(--hud-black);
    }

    .btn-content {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 10px;
    }

    .btn-icon {
      width: 28px;
      height: 28px;
      color: var(--hud-green);
    }

    .btn-content span {
      font-size: 20px;
      font-weight: 700;
      color: var(--hud-almost-black);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .btn-description {
      color: var(--hud-dark-gray);
      font-size: 16px;
      margin: 0;
      padding-left: 43px;
      font-weight: 500;
    }

    .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 25px 0;
    }
    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-bottom: 3px solid var(--hud-beige);
    }
    .divider span {
      padding: 0 20px;
      color: var(--hud-dark-gray);
      font-size: 16px;
      font-weight: 700;
      font-family: 'Cartoonist Hand', cursive;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .home-footer {
      text-align: center;
      margin-top: 35px;
      padding-top: 25px;
      border-top: 3px solid var(--hud-beige);
    }
    .home-footer p {
      color: var(--hud-dark-gray);
      font-size: 14px;
      margin: 0;
      font-weight: 500;
      font-family: 'Cartoonist Hand', cursive;
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