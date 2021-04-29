import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cvtech/cv/cv.component';
import {FirstComponent} from './first/first.component';
import {NgstyleComponent} from './directive/ngstyle/ngstyle.component';
import {TodocomponentComponent} from './services/todocomponent/todocomponent.component';
import {DetailcvComponent} from './cvtech/detailcv/detailcv.component';
import {NotfoundComponent} from './cvtech/notfound/notfound.component';
import {BackComponent} from './cvtech/back/back.component';
import {FrontComponent} from './cvtech/front/front.component';
import {FormComponent} from './cvtech/form/form.component';
import {AddpersonneComponent} from './cvtech/addpersonne/addpersonne.component';


const routes: Routes = [
  {path:'', component:BackComponent,
  children:[
    {path:'todo', component:TodocomponentComponent},
    {path:'color', component:NgstyleComponent},
    {path:'first', component:FirstComponent},
  ],
  },

  {path:'cv', component:FrontComponent,
    children:[
      {path:'', component:CvComponent},
      {path:'addcv', component:AddpersonneComponent},
      {path:':id', component:DetailcvComponent},


    ],
  },

  {path:'login', component:FormComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
