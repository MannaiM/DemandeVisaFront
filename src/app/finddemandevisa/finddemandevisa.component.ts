import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FindvisaService } from './findvisa.service';
import { DemandeVisa } from '../demande-visa';
@Component({
  selector: 'app-finddemandevisa',
  templateUrl: './finddemandevisa.component.html',
  styleUrls: ['./finddemandevisa.component.css']
})
export class FinddemandevisaComponent implements OnInit {

  constructor(private _FindvisaService: FindvisaService){ }

  visas:DemandeVisa[] = [];
  typev1:String;
    
ngOnInit() {
 // const id = this.route.snapshot.paramMap.get('id'); kifch njib id user   uservente:Vue[]=[];
 //this.typeV=this._AdddemandevisaService.getTypeVisas();
this._FindvisaService.getVisas(1).subscribe(x=>{
  for (const i in x) {
    this.visas.push(x[i])
   }
  
  console.log(this.visas)
},erreur=>{
  console.log("erreur")
})
   

}
}
