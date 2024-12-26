import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { StatesComponent } from './page/states/states.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { SinglestateComponent } from './page/singlestate/singlestate.component';
import { Component } from '@angular/core';

export const routes: Routes = [

{
    path:'',component:HomeComponent
},

{
    path:'Contact',component:ContactComponent
},

{
    path:'States',component:StatesComponent
},

{
    path:'States/:id',component:SinglestateComponent
},

{
    path:'**',component:NotFoundComponent
},
];
