import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Cv} from '../Modele/cv';
import {ListCVService} from '../services/list-cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() cv:Cv=null;
  @Input() size = 50;
  cvsApi;
 //@Output() sendItemToList = new EventEmitter();
  constructor(private servicelist: ListCVService) { }

  ngOnInit() {
    this.servicelist.selectItemSubject(this.cv);
  }

  EnvoyerItemVersList(cv: Cv) {
   // this.sendItemToList.emit(cv);
     this.servicelist.selectItemSubject(this.cv);
  }


}
