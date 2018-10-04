import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';
import { ClientServiceService } from './client-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  maha: string= null;

  ngOnInit() {
    
  }
  
     constructor(private _AddUserService:ClientServiceService) { }



     onSubmit(form:NgForm){
      this._AddUserService.adduser(form.value.nom,form.value.prenom,form.value.mail,form.value.pw,form.value.numCarte,form.value.dateEx,form.value.role).subscribe(
        resp=>{
          console.log("sus")
          this._AddUserService.addrole(form.value.mail,form.value.role).subscribe(q=>{
            console.log("hhhhhhhhhh")
          },ez=>{
            console.log("eeeeeeeeeeee")
          })
          this.maha="Created succeflly"
           
        },
        err=>{
          console.log("erreur")
          this.maha="noo Created"

            
        }
      )
     //
    
}


}