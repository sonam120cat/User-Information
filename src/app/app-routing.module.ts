import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinformationComponent } from './userinformation/userinformation.component';

const routes: Routes = [
  {path: 'userinformation', component: UserinformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
