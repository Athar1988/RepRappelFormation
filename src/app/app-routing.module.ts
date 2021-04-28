import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvtech/cv/cv.component';
import {FirstComponent} from './first/first.component';
import {NgstyleComponent} from './directive/ngstyle/ngstyle.component';
import {TodocomponentComponent} from './services/todocomponent/todocomponent.component';
import {DetailcvComponent} from './cvtech/detailcv/detailcv.component';


const routes: Routes = [
  {path:'', component:TodocomponentComponent},
  {path:'color', component:NgstyleComponent},
  {path:'first', component:FirstComponent},
  {path:'cv', component:CvComponent},
  {path:'cv/:id', component:DetailcvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
