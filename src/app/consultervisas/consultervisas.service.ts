import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandeVisa } from '../demande-visa';
import { AutheticationService } from '../login/authetication.service';
@Injectable()
export class ConsultervisasService {

  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  
  getDemandeVisas(){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    return this.http.get<DemandeVisa>(this.host+"/demandevisas",{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token}) });
    
  }
}
