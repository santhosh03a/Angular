import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getData(msg: any) {
    throw new Error('Method not implemented.');
    }
message:any[]=[];
  constructor() { }
  dataServe(msg:any)
  {
    this.message.push(msg);
  }
  callData():any{
    return this.message;
    }
   
}
