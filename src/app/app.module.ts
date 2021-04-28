import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListComponent } from './cvtech/list/list.component';
import { ItemComponent } from './cvtech/item/item.component';
import { CvComponent } from './cvtech/cv/cv.component';
import { DetailComponent } from './cvtech/detail/detail.component';
import { NgstyleComponent } from './directive/ngstyle/ngstyle.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodocomponentComponent } from './services/todocomponent/todocomponent.component';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import { HeaderComponent } from './menu/header/header.component';
import { SimilatorMenuComponent } from './header/similator-menu/similator-menu.component';
import { DetailcvComponent } from './cvtech/detailcv/detailcv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    ListComponent,
    ItemComponent,
    CvComponent,
    DetailComponent,
    NgstyleComponent,
    RainbowDirective,
    DefaultImagePipe,
    TodocomponentComponent,
    EmbaucheComponent,
    HeaderComponent,
    SimilatorMenuComponent,
    DetailcvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() , // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
