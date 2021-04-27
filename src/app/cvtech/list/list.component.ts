import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Cv} from '../Modele/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  cvCourant: Cv[] = [];
  @Output() sendIremversCv=new EventEmitter();

  constructor() {
    this.cvs =[
      new Cv(1, 'ALi', 'ben salah', 'rotating_card_profile.png', 'Ingénieur Informatique', 35, 5466798 ),
      new Cv(2, 'Asma', 'ben Ali', '', 'Styliste Modeliste', 32, 2525436415),
      new Cv(3, 'Marwa', 'ben Ghorbel', 'rotating_card_profile3.png', 'Cuisinière', 25, 15875442 ),
    ];
  }

  ngOnInit() {
  }

  recupereItem(cv: Cv) {
    this.sendIremversCv.emit(cv);
  }


}
