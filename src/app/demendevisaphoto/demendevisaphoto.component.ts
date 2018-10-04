import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemandevisaService } from '../demandevisa/demandevisa.service';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-demendevisaphoto',
  templateUrl: './demendevisaphoto.component.html',
  styleUrls: ['./demendevisaphoto.component.css']
})
export class DemendevisaphotoComponent implements OnInit {
  files : FileList;
  files1 : FileList; 

  constructor(private route: ActivatedRoute,private _demandevisa:DemandevisaService, private _photoservice:PhotoService) { }

  ngOnInit() {
  }
  getFiles(event){ 
    this.files = event.target.files; 
}
getFiles1(event){ 
  this.files1 = event.target.files; 
}
  onSubmit1(form:NgForm){
    const id=this.route.snapshot.paramMap.get('id')
this._demandevisa.getdemandebyid(id).subscribe(w=>{
  console.log(w)
  this._photoservice.addphoto(this.files,this.files1,id).subscribe(q=>{
    console.log("suc")
  },erreur=>console.log("errer"))

})
  }

}
