import { Url } from 'url';
import {Injectable} from '@angular/core'

import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import {User} from '../classes/user';

import { FileUploader, FileItem } from 'ng2-file-upload';

@Injectable()
export class UserService {
    private charactersUrl = 'http://localhost:3008';
    private headers = new Headers({'Content-Type': 'application/json'});
    public uploader:FileUploader;
    
    constructor (private http: Http, private router:Router, private auth:AuthService) {}

    logIn(user:User):Promise<any> {
        let url = `${this.charactersUrl}/auth/login`;

        return this.http.post(url, user, {headers: this.headers})
                   .toPromise()
                   .then(response => {
                        return response.json();
                   })
                   .catch(this.handleError);
    }

    logOut(): void{
        localStorage.removeItem('ng-token');
        this.router.navigate(['dashboard']);
    }

    createUser(user:User): Promise<any>{
        let url = `${this.charactersUrl}/user/create`;

        return this.http.post(url, user, {headers: this.headers})
                        .toPromise()
                        .then(response => {
                            return response.json();
                        })
                        .catch(this.handleError);
    }

    getUserById(id:number):Promise<User>{
        let url = `${this.charactersUrl}/user/get/${id}`;

        return this.http.get(url, {headers: this.auth.setAuthHeaders()})
                        .toPromise()
                        .then(response=>response.json().data as User)
                        .catch(this.handleError);
    }

    uploadAvatar(file:any):Promise<any> {
        let res:any;
        this.uploader = new FileUploader({
            url: `${this.charactersUrl}/user/upload/avatar`,
            authTokenHeader: this.auth.getToken()
        });

        this.uploader.queue[0]._file = file;
        file.upload = this.uploader.queue[0].upload()

        file.upload
            .toPromise()
            .then((response:any) => {
                res = response.json();
            })
            .catch(this.handleError);

        return res;
    }

    updateAvatar(fileUrl:string):Promise<User> {
        let user = new User();
        user.avatar = fileUrl

        let url = `${this.charactersUrl}/user/update/avatar/${this.auth.getUserLogged()}`;


        return this.http.put(url,user,{headers: this.auth.setAuthHeaders()})
                        .toPromise()
                        .then(response=> response.json() as User)
                        .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error(`Ha ocurrido un error: ${error}.`);
        return Promise.reject(error.message || error);
    }

}