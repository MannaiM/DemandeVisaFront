import { Component, OnInit } from '@angular/core';
import { ConsultervisasService } from './consultervisas.service';
import { DemandeVisa } from '../demande-visa';

@Component({
  selector: 'app-consultervisas',
  templateUrl: './consultervisas.component.html',
  styleUrls: ['./consultervisas.component.css']
})
export class ConsultervisasComponent implements OnInit {

  constructor(private _ConsultervisasService: ConsultervisasService){ }

  visas:DemandeVisa[] = [];

  ngOnInit() {
    this._ConsultervisasService.getDemandeVisas().subscribe(x=>{
      for (const i in x) {
        this.visas.push(x[i])
       }
      
      console.log(this.visas)
    },erreur=>{
      console.log("erreur")
    })
  }

}

