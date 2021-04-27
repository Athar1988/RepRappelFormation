import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Cv} from '../Modele/cv';
import {ListCVService} from '../services/list-cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() sendIremversCv=new EventEmitter();

  constructor(public listecvservice:ListCVService) {
  }

  ngOnInit() {
    this.cvs=this.listecvservice.getListeCV();
  }

  recupereItem(cv: Cv) {
    this.sendIremversCv.emit(cv);
  }


}
