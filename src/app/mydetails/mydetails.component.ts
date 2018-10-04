import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { MydetailsService } from './mydetails.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  constructor(private _MyDetailService: MydetailsService,private route: ActivatedRoute,
    private router: Router) { }




    details:Details[] = [];
 

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this._MyDetailService.getDetailsByVisa(id).subscribe(x=>{
        for (const i in x) {
          this.details.push(x[i])
         }
        
        console.log(this.details)
      },erreur=>{
        console.log("erreur")
      });
  
  }

}
