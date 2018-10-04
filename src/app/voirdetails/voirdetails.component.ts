import { Component, OnInit } from '@angular/core';
import { VoirdetailsService } from './voirdetails.service';
import { Details } from '../details';
import { DemandeVisa } from '../demande-visa';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-voirdetails',
  templateUrl: './voirdetails.component.html',
  styleUrls: ['./voirdetails.component.css']
})
export class VoirdetailsComponent implements OnInit {

  constructor(private _VoirdetailsService: VoirdetailsService,private route: ActivatedRoute,
    private router: Router) {
    
   }

  details:Details[] = [];
  typev1:String;
  visas:DemandeVisa[] = [];
 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this._VoirdetailsService.getDetailsByVisa(id).subscribe(x=>{
      for (const i in x) {
        this.details.push(x[i])
       }
      
      console.log(this.details)
    },erreur=>{
      console.log("erreur")
    });

    
    
   
  }
  maha:string=null;
  id1:number;
stat:String=null;
selectedOption: string;
/* onClickMe(a,selectedOption) {
      alert(a+this.selectedOption)
  }
  onChange($event){
    alert($event)
  }
  printedOption: string;

  */
  onClickMe(idDetail,selectedOption) {
    console.log(idDetail);
   alert(this.selectedOption);
  
  
    this._VoirdetailsService.updateDetail(idDetail,selectedOption).subscribe(
      resp=>{
        console.log("sus")
         this.maha="successssss";
      },
      err=>{
        console.log("erreur")
        this.maha="nnnnn";
          
      }
    )
  
  }

}
