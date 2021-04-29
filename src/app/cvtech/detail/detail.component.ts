import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../Modele/cv';
import {EmbaucheService} from '../services/embauche.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ListCVService} from '../services/list-cv.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   cv:Cv=null;
  constructor(public embaucheservice: EmbaucheService,
              private toaster: ToastrService,
              private router: Router,
              private service:ListCVService) { }

  ngOnInit() {
    this.service.clickItemSubject.subscribe((data) => (this.cv = data));
  }

  embaucherCV(cv: Cv) {
    //verifier si existe ou pas
    if(this.embaucheservice.afficheLesCvEmbaucher().indexOf(cv) > -1){
      this.toaster.error("CV embaucher déjà");
    }
else{
      this.embaucheservice.ajouterCvEmbaucher(cv);
    }
  }


}
