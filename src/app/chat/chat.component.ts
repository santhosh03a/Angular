
import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import {NbChatModule} from '@'
@Component({
selector: 'app-chat',
templateUrl: './chat.component.html',
styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,DoCheck {
msg:any='';
constructor(private data:DataService) { } ngOnInit(): void {
}
send(msg:any):void
{
this.msg=this.data.dataServe(msg);
}
ngDoCheck():void{
this.msg=this.data.callData();
}flag:boolean=false;change(){
if(this.flag){
this.flag=!this.flag; }
else{
this.flag=!this.flag;
}
}}

