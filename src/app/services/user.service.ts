import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = "Diego Mendoza"
  loggedIn = true
  constructor() { }

  getUser(): string {
    return this.user
  }
  getState(): boolean {
    return this.loggedIn
  }
  changeState(): void {
    if(this.loggedIn){ this.loggedIn = false }
    else{ this.loggedIn = true }
  }
}
