import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Client } from '../client';
import { AutheticationService } from '../login/authetication.service';

@Injectable()
export class ClientServiceService {

  //constructor() { }


  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  adduser(nom,prenom,mail,pw,numCarte,dateEx,role){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    var user=JSON.stringify({nom:nom,prenom:prenom,mail:mail,password:pw,numCarte:Number(numCarte),dateExpiration:dateEx,role:null/*,demandeVisa:[]*/ })
     console.log(user)
     return this.http.post(this.host+"/client",user,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})});
       //this.http.post(this.host+"/role",role,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
      }

    addrole(mail,role){
      let formdata: FormData =new FormData()
     
      this.token=this._auth.loadToken();
      formdata.append('role',role)
      formdata.append('mail',mail)
      return this.http.post(this.host+"/role1",formdata,{headers:new HttpHeaders({'Authorization':this.token})})
     
    }
  
  getClient(nom){
    this.token=this._auth.loadToken();
    console.log(nom)
    return this.http.get<Client>(this.host+"/clientid/"+nom,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
  }
  /*
  getClients(){
    return this.http.get<Client>(this.host+"/clients/")
  }*/

}