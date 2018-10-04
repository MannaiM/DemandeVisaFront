import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from '../details';
import { DemandeVisa } from '../demande-visa';


@Injectable()
export class VoirdetailsService {

  private host:String="http://localhost:8082";
  constructor(private http:HttpClient) { }
  private token=null;
  
  getDetailsByVisa(id){
  
    return this.http.get<Details>(this.host+"/finddetailvisa/"+id,{headers:new HttpHeaders({'Content-Type': 'application/json'}) });
    
  }
  getVisaById(id){
  
    return this.http.get<DemandeVisa>(this.host+"/visasbyid/"+id,{headers:new HttpHeaders({'Content-Type': 'application/json'}) });
    
  }
  updateDetail(id,statut){
    return this.http.put<Details>(this.host+"/modifierStat/"+id+"/"+statut,{headers:new HttpHeaders({'Content-Type': 'application/json'}) });
    

  }
}
