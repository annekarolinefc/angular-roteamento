import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //INSERINDO AS PÁGINAS
  {path: 'page1', component: Page1Component},
  //CRIANDO O INDEX
  {path: '', redirectTo: 'page1', pathMatch: 'full'},
  {path: 'page2/:id', component: Page2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
