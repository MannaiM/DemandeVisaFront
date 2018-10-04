import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Typevisa } from '../Typevisa';

@Injectable()
export class TypeVisaService {

  //constructor() { }

  private host:String="http://localhost:8082";
  constructor(private http:HttpClient) { }
  private token=null;
  
  addtypevisa(libelle){
   
    var typeV=JSON.stringify({libelle:libelle })
     console.log(typeV)
    return this.http.post(this.host+"/typevisa",typeV,{headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }

  
  getTypeVisa(){
  
    return this.http.get<Typevisa>(this.host+"/types",{headers:new HttpHeaders({'Content-Type': 'application/json'}) });
    
  }
  

}
