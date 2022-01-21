import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
val:string="";
va:string="";
value:string="";
flag:boolean=false;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  car(v:any,v2:any){
    this.val=`${Math.round(v*v2*0.07)}`;
  }
  home(b:any,b2:any){
    this.va=`${Math.round(b*b2*0.05)}`;
  }
  Personal(c:any,c2:any){
    this.value=`${Math.round(c*c2*0.04)}`;
  }
  get getstatus():boolean{
    return this.service.isloggedIn;
  }
  get(){
    return sessionStorage.getItem('username');
  }
  logout():void{
     sessionStorage.clear();
    this.service.LoggedInStatus(false);

  }
    change(){
      if(this.flag){
        this.flag=!this.flag; }
      else{
          this.flag=!this.flag;
        }
  }
}
