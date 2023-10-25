import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasCreditoComponent } from './pages/notas-credito/notas-credito.component';
import { LayoutPagesComponent } from '../sidenav/pages/layout-pages/layout-pages.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      { path: 'Notas-Credito', component: NotasCreditoComponent},
      { path: '**', redirectTo: 'list'},
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
