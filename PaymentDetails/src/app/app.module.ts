import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CardHomeComponent } from './card-home/card-home.component';



const  appRoutes: Routes=[
  {path:'',component:CardHomeComponent},
  {path:'UpdateCard/:id',component:UpdateCardComponent},
  {path: 'home',component:CardHomeComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    DeleteCardComponent,
    UpdateCardComponent,
    ViewCardComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
