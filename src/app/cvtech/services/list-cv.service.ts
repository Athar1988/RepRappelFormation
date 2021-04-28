import { Injectable } from '@angular/core';
import {Cv} from '../Modele/cv';

@Injectable({
  providedIn: 'root'
})
export class ListCVService {
  cv:Cv;
  cvs =[
    new Cv(1, 'ALi', 'ben salah', 'rotating_card_profile.png', 'Ingénieur Informatique', 35, 5466798 ),
    new Cv(2, 'Asma', 'ben Ali', '', 'Styliste Modeliste', 32, 2525436415),
    new Cv(3, 'Marwa', 'ben Ghorbel', 'rotating_card_profile3.png', 'Cuisinière', 25, 15875442 ),
  ];

  constructor() { }

  getListeCV(): Cv[]{
    return this.cvs;
  }

  getcvselectionnerID(id: number): Cv | null {
    const cv = this.cvs.find((cv) => cv.id === id);
    if (cv) {
      return cv;
    }
    return null;
  }


  supprimerCV(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);
  }

}
