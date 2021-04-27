import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../Modele/cv';
import {EmbaucheService} from '../services/embauche.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv:Cv=null;
  constructor(public embaucheservice: EmbaucheService,
              private toaster: ToastrService) { }

  ngOnInit() {
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
