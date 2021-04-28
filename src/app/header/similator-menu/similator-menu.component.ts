import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-similator-menu',
  templateUrl: './similator-menu.component.html',
  styleUrls: ['./similator-menu.component.css']
})
export class SimilatorMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotothelien(cv: string) {
    this.router.navigate([cv]);

  }
}
