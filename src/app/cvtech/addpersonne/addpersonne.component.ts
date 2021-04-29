import { Component, OnInit } from '@angular/core';
import {Cv} from '../Modele/cv';
import {ListCVService} from '../services/list-cv.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addpersonne',
  templateUrl: './addpersonne.component.html',
  styleUrls: ['./addpersonne.component.css']
})
export class AddpersonneComponent implements OnInit {
cv:Cv=null;
  constructor(private serviceListe:ListCVService,
              private toaster:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }

  addCv(cv: Cv) {
   // this.serviceListe.ajouterCVListe(cv);
    this.serviceListe.addcv(cv).subscribe(
      (data)=>{

        this.toaster.success("cv ajouté ave  succés");
        this.router.navigate(['cv']);
        },
      (error) => {
        this.toaster.error(`Problème avec le serveur veuillez contacter l'admin`);
      }
    )


  }
}
