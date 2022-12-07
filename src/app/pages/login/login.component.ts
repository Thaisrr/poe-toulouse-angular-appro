import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserAuth} from "../../utils/types/UserAuth";
import {AuthenticationService} from "../../utils/services/authentication.service";

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

  constructor(private authService: AuthenticationService) { }

  login() {
    // Todo : apprendre les nouveaux FormGroups typés de Angular 14
    const user_info: UserAuth = this.login_form.value as UserAuth;
    this.authService.login(user_info).subscribe(res => {
      console.log('Connecté⋅e !', res.token)
    })

  }

}
