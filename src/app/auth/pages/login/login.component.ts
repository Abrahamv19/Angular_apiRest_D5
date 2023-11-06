import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })
  constructor(private authservice: AuthService, private router: Router) { }

  login(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else { 
      this.authservice.login(this.loginForm.getRawValue());
    }
  }
}
