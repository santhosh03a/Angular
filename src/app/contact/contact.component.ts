import { Component, OnInit } from '@angular/core';



@Component({
selector: 'app-contact',
templateUrl: './contact.component.html',
styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
flag:boolean=false;



change(){
if(this.flag){
this.flag=!this.flag; }
else{
this.flag=!this.flag;
}
}
constructor() { }



ngOnInit(): void {
}



}