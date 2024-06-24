import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState =  new BehaviorSubject<boolean>(false)

  constructor() { }
  login(): void {
    this.authState.next(true)
  }
  logout(): void {
    this.authState.next(false)
  }
}
