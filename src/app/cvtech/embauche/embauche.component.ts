import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from '../services/embauche.service';
import {Cv} from '../Modele/cv';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  cvEmbaucher:Cv[]=[];
  constructor(public embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.cvEmbaucher=this.embaucheService.afficheLesCvEmbaucher()
  }

}
