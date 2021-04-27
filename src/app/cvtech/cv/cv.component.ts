import { Component, OnInit,Input } from '@angular/core';
import {Cv} from '../Modele/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  itemCvcourant:Cv;
  constructor() { }

  ngOnInit() {
  }

  recupereItemversCv(cv: Cv) {
    this.itemCvcourant=cv;
  }
}
