import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  val:string="";
va:string="";
value:string="";
flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  car(v:any,v2:any){
    this.val=`${Math.round(v*v2*0.06)}`;
  }
  home(b:any,b2:any){
    this.va=`${Math.round(b*b2*0.05)}`;
  }
  Personal(c:any,c2:any){
    this.value=`${Math.round(c*c2*0.05)}`;
  }
    change(){
      if(this.flag){
        this.flag=!this.flag; }
      else{
          this.flag=!this.flag;
        }
  }

}
