import { Component, OnInit } from '@angular/core';
import {observable, Observable,merge} from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
 image:string;
  obs: Observable<string>  = null;
  constructor() { }

  ngOnInit(): void {
    let i=0;
    const obs= new Observable<string>(
      (observer)=>{
        let image=[
          'default.jpg',
          'tim_logo.png',
          'rotating_card_profile.png',
          'rotating_card_profile2.png',
          'rotating_card_profile3.png'];
        let i=0;
        setInterval(
          ()=> {
            if (i=== image.length) {
              i=0;
            }
            i++;
            observer.next(image[i]);
          },1000
        );
      }
    )



    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });

    const observable2=  observable.pipe(
      map((x) => x * 3),
      filter(x => x % 2 === 0),
    ).subscribe((val) => {
      console.log(val);
    });



    obs.subscribe(
      (data)=>{this.image=data;},
    (err)=>{console.log("erreur");}
    )
  }



}

