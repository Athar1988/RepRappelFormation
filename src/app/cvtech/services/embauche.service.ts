import { Injectable } from '@angular/core';
import {Cv} from '../Modele/cv';
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
cvEmbaucher:Cv[]=[];
  constructor(private toaster: ToastrService) { }

  afficheLesCvEmbaucher(): Cv[]{
   return  this.cvEmbaucher;
  }

  ajouterCvEmbaucher(cv){
    this.cvEmbaucher.push(cv);
    this.toaster.info("cv ajouter avec succées");
  }

}
