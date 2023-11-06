import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { map } from 'rxjs';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService
  .verifyToken()
  .pipe(
    map((isAuthenticated) => 
        isAuthenticated ? true : router.createUrlTree(['/auth/login'])
    )
  );
};
