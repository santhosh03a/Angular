import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();
  constructor(private users :UserService) { }

  ngOnInit(): void {
  }
  save(obj:any)
  {
    // this.user.id=obj.id;
    this.user.firstname=obj.firstname;
    this.user.lastname=obj.lastname;
    this.user.email=obj.email;
    this.user.mobile=obj.mobile;
    this.user.pass=obj.pass;
    this.user.account_type=obj.accountType;
    if(this.user !== null)
{
  this.users.saveuser(this.user).subscribe((res)=>{
  console.log(res);
  });

} 
  }
}
