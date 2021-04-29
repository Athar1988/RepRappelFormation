import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Cv} from '../Modele/cv';
import {ListCVService} from '../services/list-cv.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  //@Output() sendIremversCv=new EventEmitter();

  constructor(public servicelist:ListCVService,
              private toaster:ToastrService) {
  }

  ngOnInit() {
    this.servicelist.getListeCV().subscribe(
      (data)=> (this.cvs=data, console.log(this.cvs)),
      (error)=> (
        this.toaster.error("les donnés sont fake!! il ya un probleme de resaux"),
        this.cvs=this.servicelist.getListeCVFAKE()
      )
    )

  }

 /* recupereItem(cv: Cv) {
    this.sendIremversCv.emit(cv);
  }*/


}
