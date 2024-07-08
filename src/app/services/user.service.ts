import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = "Diego Mendoza"
  constructor() { }

  getUser(): string {
    return this.user
  }
}
