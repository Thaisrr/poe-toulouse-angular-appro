import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserAuth} from "../../utils/types/UserAuth";
import {AuthenticationService} from "../../utils/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login_form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    // Todo : apprendre les nouveaux FormGroups typés de Angular 14
    const user_info: UserAuth = this.login_form.value as UserAuth;
    this.authService.login(user_info).subscribe(res => {
      if(res) this.router.navigate(['/admin'])
    });
      /*.subscribe({
        next : res => localStorage.setItem('token', res.token),
        error: err => console.log(err?.error.error || 'Oupsy')
      })*/
  }

}
