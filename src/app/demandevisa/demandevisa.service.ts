import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../client';
import { Typevisa } from '../Typevisa';
import { AutheticationService } from '../login/authetication.service';
import { DemandeVisa } from '../demande-visa';
@Injectable()
export class DemandevisaService {

 // constructor() { }
 private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  adddemandevisa(requestCountry,nationalite,travelDate,dateDebut,dateFin,periode, prix,commentaire,idClient,idTypeVisa,libelle){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    var demandeV=JSON.stringify({requestCountry:requestCountry,nationalite:nationalite, travelDate:travelDate,dateDebut:dateDebut,dateFin:dateFin,periode:periode,prix:prix,commentaire:commentaire, client:idClient, typeVisa:{idType:idTypeVisa,libelle:libelle}})
     console.log(demandeV)
     
    return this.http.post<DemandeVisa>(this.host+"/demandevisas",demandeV,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})});
  }

 getTypeVisas(){
  this.token=this._auth.loadToken();
    
  if(this.token==null) this._auth.loadToken();
  return this.http.get<Typevisa>(this.host+"/types",{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token}) });
}
getdemandebyid(id){
  this.token=this._auth.loadToken();
  if(this.token==null) this._auth.loadToken();
  return this.http.get(this.host+"/visasbyid/"+id,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token}) });

}

 

  
}
