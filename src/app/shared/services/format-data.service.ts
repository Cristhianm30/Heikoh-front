import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDataService {
  
  private roleLabels: { [key: string]: string } = {
    'ADMIN': 'Administrador',
    'USER': 'Usuario',
    'MODERATOR': 'Moderador',
    'EDITOR': 'Editor',
    'VIEWER': 'Visualizador',
    'MANAGER': 'Gerente',
    'SUPERVISOR': 'Supervisor'
  };

  private dateFormats: { [key: string]: Intl.DateTimeFormatOptions } = {
    'short': { year: 'numeric', month: 'short', day: 'numeric' },
    'long': { year: 'numeric', month: 'long', day: 'numeric' },
    'full': { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
  };

  formatRole(role: string): string {
    if (!role) return '';
    
    const rolePart = role.includes('_') ? role.split('_')[1] : role;
    return this.roleLabels[rolePart] || rolePart;
  }

  formatDate(date: string, format: 'short' | 'long' | 'full' = 'long'): string {
    if (!date) return '';
    
    const dateObj = new Date(date);
    const formatOptions = this.dateFormats[format] || this.dateFormats['long'];
    return dateObj.toLocaleDateString('es-ES', formatOptions);
  }

  formatStatus(enabled: boolean): string {
    return enabled ? 'Activo' : 'Inactivo';
  }

  formatEmail(email: string): string {
    return email.toLowerCase();
  }

  // Métodos futuros que podrías agregar
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  }

  formatPhoneNumber(phone: string): string {
    // Lógica para formatear números de teléfono
    return phone;
  }
} 