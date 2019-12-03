import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login/login.service';
import { AppConstants } from 'src/app/shared/constant/app-constants';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate([AppConstants.loginPageUrl], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
