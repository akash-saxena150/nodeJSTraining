import {Injectable} from '@angular/core'
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private router: Router, private AuthService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return this.AuthService.isAuthenticated()
        .then(
            (authenticated: boolean)=>{
                if(authenticated)
                    return true;
                else{
                     this.router.navigate(['/servers']);
                     return false;
                }
            }
        )
    }
    canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route, state);
    }

}