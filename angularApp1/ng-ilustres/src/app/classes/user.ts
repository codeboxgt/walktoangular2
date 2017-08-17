export class User {
    id?:number;
    username?:string;
    userLogin?:string;    
    avatar?:string;
    password?:string;

    constructor (id?:number, username?:string, userLogin?:string, avatar?:string,password?:string){
        this.id = id;
        this.userLogin = userLogin;
        this.username = username;
        this.avatar = avatar;
        this.password = password;
    }   
}