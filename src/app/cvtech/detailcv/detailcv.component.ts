import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListCVService} from '../services/list-cv.service';
import {Cv} from '../Modele/cv';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {
id:null;
cv:Cv| null=null;
  constructor(private activerouter: ActivatedRoute,
              private listcvservice:ListCVService,
              private toaster: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.activerouter.params.subscribe(
      (params)=>{
        const cv=this.listcvservice.getcvselectionnerID(+params['id']);
        if(!cv){
          this.router.navigate(['cv']);
        }
        else{
          this.cv=cv;
        }
      }
    )
  }


  supprimerCV() {
    this.toaster.success("CV supprimé avec succés");
    this.listcvservice.supprimerCV(this.cv);
    this.router.navigate(['cv']);
  }
}
