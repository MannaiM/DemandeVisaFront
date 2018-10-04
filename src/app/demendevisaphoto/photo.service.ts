import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { AutheticationService } from '../login/authetication.service';
@Injectable()
export class PhotoService {

  private host:String="http://localhost:8082";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  addphoto(file1,file2,id){

    this.token=this._auth.loadToken();
  
    let formdata: FormData =new FormData()
   console.log(file1[0])
   console.log(file2[0])
   
    formdata.append('id',String(id))
    formdata.append('file1',file1[0])
    formdata.append('file2',file2[0])
    return this.http.post(this.host+"/addphoto",formdata,{headers:new HttpHeaders({'Authorization':this.token})})
   
  }
  
}
