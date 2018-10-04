import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AutheticationService } from './authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  c:any;
  erreur:String;
  constructor(private autheticationService:AutheticationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){
    console.log(user.nom,user.password)
    this.autheticationService.login(user.nom,user.password).subscribe(
      resp=>{
        
          let jwt=resp.headers.get('Authorization');
         this.autheticationService.saveToken(jwt);
         this.router.navigateByUrl('/menu');
         this.erreur=""
          
      },
      err=>{
        console.log("erreur")
        this.erreur="votre email ou le mote de passe sont erroné"
         // console.log(err);
      }
    )
  }
}
