import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { map } from 'rxjs';

export const dashboardGuard: CanActivateFn = (route, state) => {
  console.log('DASHBOARD GUARD');

  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.authUser$.pipe(
    map((user)=> {
      return !!user ? true : router.createUrlTree(['/auth/login']);
    })
  )


  // authService.authUser$
  // const tokenValido = false;
  // return tokenValido ?  router.createUrlTree(['/auth']) : true  ;
};
