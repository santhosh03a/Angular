import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1=new User;
  msg:string='';
  constructor(private service :UserService,private router:Router) { }

  ngOnInit(): void {
  }
  // changes(){
  //   if(this.flag){
  //     this.flag=!this.flag; 
  //   }
  //   else{
  //       this.flag=!this.flag;
  //     }
  //   }

    loginuser(){
      this.service.login(this.user1).subscribe(
        data=>{console.log(data);
        this.router.navigate(['']);
        sessionStorage.setItem('username',data.firstname);
        this.service.userdetails(data);
        this.service.LoggedInStatus(true);
  
        },
        error=>{console.log("Invalid username or password");
        this.msg="invalid email or password";
        }
      )
    }

}
