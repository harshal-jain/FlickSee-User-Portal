import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<any>(null); // For Token Use
  private loggedIn = new BehaviorSubject<boolean>(false); // by default logged user nhi hai isliye false daal diya
  private message: string = "";

  constructor(private router: Router) { }

  // data comes as an object
  Auth(objUserDetails: any) {
    if (objUserDetails.UserId === 0) {
      this.message = "Please enter valid username and password !!";
      this.currentUserSubject.next(null);
      this.loggedIn.next(false);
      localStorage.clear();
    } else {
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(objUserDetails));
      this.currentUserSubject.next(objUserDetails); //  current user ko daal denge
      this.loggedIn.next(true);
      this.router.navigate(['/home/shop']);

    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/home/shop']);

  }

  public getMessage(): string {
    return this.message;
  }
}
