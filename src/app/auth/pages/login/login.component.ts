import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) {}

  login(): void {
    this.authservice.login().subscribe({
      next: (authuser) => {
        if(!!authuser){
          this.router.navigate(['/dashboard'])

        }
      },
    });
  }
}
