import { Component, OnInit } from '@angular/core';
import  { TypeVisaService } from './type-visa.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Typevisa } from '../Typevisa';


@Component({
  selector: 'app-type-visa',
  templateUrl: './type-visa.component.html',
  styleUrls: ['./type-visa.component.css']
})
export class TypeVisaComponent implements OnInit {

  //constructor() { }
  typeVisa:Typevisa[] = [];

  ngOnInit() {
    this._AddTypeService.getTypeVisa().subscribe(x=>{
      for (const i in x) {
        this.typeVisa.push(x[i])
       }
      
      console.log(this.typeVisa)
    },erreur=>{
      console.log("erreur")
    })
  }

  constructor(private _AddTypeService:TypeVisaService) { }



     onSubmit(form:NgForm){
      this._AddTypeService.addtypevisa(form.value.libelle,).subscribe(
        resp=>{
          console.log("sus")
      
           
        },
        err=>{
          console.log("erreur")
          
            
        }
      )


}
}