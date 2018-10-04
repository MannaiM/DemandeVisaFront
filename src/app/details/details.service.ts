import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DemandeVisa } from '../demande-visa';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Details } from '../details';
import { detail, Traitement } from '../detail';
import { AutheticationService } from '../login/authetication.service';

@Injectable()
export class DetailsService {

 // constructor() { }

  
  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  t :Traitement
  addDetail(traitemnt:detail){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    console.log("**************")
    this.t=traitemnt[0]
   console.log()
   return traitemnt
    /*var user=JSON.stringify({photo:photo,copie:copie,statut:statut,idDemandeVisa:idDemandeVisa })
     console.log(user)
    return this.http.post(this.host+"/details",user,{headers:new HttpHeaders({'Content-Type': 'application/json'})});
  */
  }
  
  /*getdemandeVisa(name): Observable<DemandeVisa[]>{
    return this.http.get<DemandeVisa[]> (this.host+"/demandevisas/{id}");
  }
  getDetail(id){
    return this.http.get<Details>(this.host+"/details/"+id)
  }
  getDetails(){
    return this.http.get<Details>(this.host+"/details/")
  }*/
}
