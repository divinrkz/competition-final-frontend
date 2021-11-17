import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private authUser = new BehaviorSubject({});

  constructor() { }

  setAuthUser(user: any) {
    this.authUser.next(user);
  }

  getAuthUser() {
    return this.authUser.asObservable();
  }
}
