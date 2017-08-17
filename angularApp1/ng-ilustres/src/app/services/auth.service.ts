import {Injectable} from '@angular/core'
import {Router} from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    
    constructor (private http: Http,
                 private router: Router) {}

    saveToken(token:string):void {
        localStorage.setItem('ng-token',token);
    }

    getToken():string {
        return localStorage.getItem('ng-token');
    }

    isLoggedIn():boolean {
        let token = this.getToken();

        if(token) {
            let payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now()/1000;
        } else{
            return false;
        }
    }

    getUserLogged() {
        let token = this.getToken();

        if(token) {
            let payload = JSON.parse(window.atob(token.split('.')[1]));
            if(payload.exp > Date.now()/1000) {
                return payload.sub;
            } else {
                this.router.navigate(['dashboard']);
                return false
            }            
        } else{
            return false;
        }
    }

    setAuthHeaders(): Headers {
        let _auth = `Bearer ${this.getToken()}`;
        return new Headers({'Authorization' : _auth});
    }

}