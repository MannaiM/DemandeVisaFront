import { Component, OnInit } from '@angular/core';
import { DemandevisaService } from './demandevisa.service';
import { NgForm, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Typevisa } from '../Typevisa';
import { DetailsService } from '../details/details.service';
import { detail } from '../detail';
import { AutheticationService } from '../login/authetication.service';
import { JwtHelper } from 'angular2-jwt';
import { ClientServiceService } from '../client/client-service.service';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demandevisa',
  templateUrl: './demandevisa.component.html',
  styleUrls: ['./demandevisa.component.css']
})

export class DemandevisaComponent implements OnInit {
  myForm :FormGroup
  files : FileList
  copieP : FileList
  file:File
  detail:detail
  userimagefile:File
  idclient:number
/// FormBuilder bech nzid bih 
  constructor(private _AdddemandevisaService:DemandevisaService,
    private fb:FormBuilder,private _DetailsService:DetailsService,
  private _auth:AutheticationService , private _client:ClientServiceService,
private route:ActivatedRoute,private router: Router ){ }

  typeV:Typevisa[] = [];
  typev1:String;
  name:String;
  requestCountry: string="";
    nationalite: string="";
    travelDate: string="";
    prix: number=0;
    typeVisa: Typevisa;
    c:Client
ngOnInit() {
  let jwtHelper =new JwtHelper()
  this.name=jwtHelper.decodeToken(this._auth.loadToken()).sub;
  console.log(this.name)
  
  this._client.getClient(this.name).subscribe(p=>{
    
    this.c=p
    console.log(this.c)
  })
 
 //this.typeV=this._AdddemandevisaService.getTypeVisas();
this._AdddemandevisaService.getTypeVisas().subscribe(x=>{
  for (const i in x) {
    this.typeV.push(x[i])
    
   }

  
  console.log(this.typeV)
},erreur=>{
  console.log("erreur")
})
  

this.myForm = this.fb.group({
  traitements: this.fb.array([])
})

}
getFiles(event){ 
  this.files = event.target.files;
  this.file=this.files[0]
  console.log(this.file)
}
getcopyP(event){ 
  this.copieP = event.target.files;
  console.log(this.copieP)
}

maha: string=null;
onSubmit(form:NgForm){
 console.log(form.value)
 let toArray =form.value.typeVis.split(" ");
console.log(toArray[1])
console.log(toArray[0])

this._AdddemandevisaService.adddemandevisa(form.value.requestCountry,form.value.nationalite,form.value.travelDate1,"dd","df","per",form.value.prix,"1",this.c,toArray[0],toArray[1]).subscribe(
  resp=>{
    console.log("sus")
    console.log(resp.idDemandeVisa)
    this.router.navigate(['/ajouterDemandeVisa/'+resp.idDemandeVisa]);
    this.maha="Created succeflly"
     
  },
  err=>{
    console.log("erreur")
    
      
  }
)}


  get Forms() {
      return this.myForm.get('traitements') as FormArray
    }
  
    test(){
      var user=JSON.stringify(this.myForm.value)
      this.detail=this.myForm.value
    
     alert(user)   
     this._DetailsService.addDetail(this.detail)
    }

    addDetail() {
      this.files=null
      this.copieP=null
      let reader = new FileReader();
      const traitement = this.fb.group({ 
        statut: [],
        file:this.file,
        copiePasseport:this.copieP
        
      })
      
      this.Forms.push(traitement);
      
    }
  
  
    deleteDetail(i) {
      this.Forms.removeAt(i)
    }


}
