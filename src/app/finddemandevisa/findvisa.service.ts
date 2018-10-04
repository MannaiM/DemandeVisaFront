import { Injectable } from '@angular/core';
import { DemandeVisa } from '../demande-visa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutheticationService } from '../login/authetication.service';

@Injectable()
export class FindvisaService {

 
  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  getVisas(id){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    return this.http.get<DemandeVisa>(this.host+"/demandevisaClient/"+id,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token}) });
    
  }
  
}
