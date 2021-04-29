import { Injectable } from '@angular/core';
import {Cv} from '../Modele/cv';
import {Subject,Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root'
})
export class ListCVService {
  cv:Cv;
  clickItemSubject= new Subject<Cv>();

  cvs =[
    new Cv(1, 'ALi', 'ben salah', 'rotating_card_profile.png', 'Ingénieur Informatique', 35, 5466798 ),
    new Cv(2, 'Asma', 'ben Ali', '', 'Styliste Modeliste', 32, 2525436415),
    new Cv(3, 'Marwa', 'ben Ghorbel', 'rotating_card_profile3.png', 'Cuisinière', 25, 15875442 ),
  ];
  constructor(
    private http:HttpClient,

  ) { }


  getListeCVFAKE(): Cv[]{
    return this.cvs;
  }

  getListeCV(): Observable<Cv[]> {
    return  this.http.get<Cv[]>(PERSONNE_API);

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

  ajouterCVListe(cv){
    this.cvs.push(cv);
  }

  selectItemSubject(cv:Cv):void{
    this.clickItemSubject.next(cv);
  }

  addcv(cv:Cv):Observable<Cv>{
    return this.http.post<Cv>(PERSONNE_API, cv);
  }
}
