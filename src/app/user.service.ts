import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _URL: string="http://localhost:8080";
  details=new User;
  message:any[]=[];
  isLoggedInStatus=false;
  constructor(private http:HttpClient) { }
  dataServe(msg:any):void{
    this.message.push(msg);
    
  }
  LoggedInStatus(value: boolean) {
    this.isLoggedInStatus = value;
  }
  get isloggedIn(){
    return this.isLoggedInStatus;
  }

  callData():any{
    return this.message;
  }
  saveuser(user:User):Observable<User>{
    return this.http.post<User>(`${this._URL}/saveuser`,user);
  }
  login(user:User){
    return this.http.post<User>(`${this._URL}/login`,user);
    
  }
  userdetails(user:User){
   this.details=user;
   console.log(this.details);
  }
  getUser(){
    return this.details;
  }
  


  
}
