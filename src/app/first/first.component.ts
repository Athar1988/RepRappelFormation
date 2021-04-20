import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name="Athar";
  ishidden=true;
  bgc="yellow";
  contenueInput="";
  constructor() { }

  ngOnInit() {
  }

  ishide() {
    this.ishidden=!this.ishidden;
  }

  afficheInpule(input: string) {
    this.contenueInput=input;
  }
}
