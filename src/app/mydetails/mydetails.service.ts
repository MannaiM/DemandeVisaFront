import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from '../details';
import { AutheticationService } from '../login/authetication.service';
@Injectable()
export class MydetailsService {

 
  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  getDetailsByVisa(id){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    return this.http.get<Details>(this.host+"/finddetailvisa/"+id,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token}) });
  }

}
