import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Cv} from '../Modele/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() cv:Cv=null;
 @Output() sendItemToList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  EnvoyerItemVersList(cv: Cv) {
    this.sendItemToList.emit(cv);

  }
}
