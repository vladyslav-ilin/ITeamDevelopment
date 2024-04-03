import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private TOKEN_KEY = 'Token';
  private ROLE = 'Role';
  constructor() { }

  setToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  setRole(role: string): void {
    sessionStorage.setItem(this.ROLE, role);
  }

  getRole(): string | null {
    return sessionStorage.getItem(this.ROLE);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  clear(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.ROLE);
  }
}
