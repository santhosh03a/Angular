import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user=new User;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  getDetails(){
    this.user=this.service.getUser();
    return this.user;
  }

}
