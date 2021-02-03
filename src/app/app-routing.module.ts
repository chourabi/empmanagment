import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { DetailsempComponent } from './detailsemp/detailsemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ListempComponent } from './listemp/listemp.component';


const routes: Routes = [
  { path:'' , component:ListempComponent },
  { path:'list' , component:ListempComponent },
  { path:'add' , component:AddempComponent },
  { path:'edit/:id' , component:EditempComponent },
  { path:'details/:id' , component:DetailsempComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
