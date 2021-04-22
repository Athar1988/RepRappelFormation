import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name="";
  ishidden=true;
  contenueInput="";
  @Input() defaultcolor="green";
  bgc="";
  value="";
  constructor() { }

  ngOnInit() {
    this.name="Athar";
    this.ishidden=true;
    this.value="le champs est vide";
    this.bgc=this.defaultcolor;
  }

  ishide() {
    this.ishidden=!this.ishidden;
  }

  afficheInpule(input: string) {
    this.contenueInput=input;
  }

  changeCouleur(newColor:string) : void{
    this.bgc=newColor;
  }

  etatinitial() {
    this.value="chamgement";
  }
}
