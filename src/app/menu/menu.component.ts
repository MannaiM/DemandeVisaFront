import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  myForm :FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fichier: '',
      traitements: this.fb.array([])
    })

 
  }
  get Forms() {
    
    return this.myForm.get('traitements') as FormArray
  }

  test(){
    
    var user=JSON.stringify(this.myForm.value)
   alert(user)
  }
  addPhone() {
  
    const traitement = this.fb.group({ 
      colonne: [],
      filtre: [],
      nextfiltre:this.fb.array([])
      
    })
  
    this.Forms.push(traitement);
    
  }


  deletePhone(i) {
    this.Forms.removeAt(i)
  }

}
