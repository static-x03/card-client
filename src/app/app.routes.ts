import { Routes } from '@angular/router';
import { CardGeneratedComponent } from './card-generated/card-generated.component';

export const routes: Routes = [
  {
    path:'',
    component: CardGeneratedComponent,
    title:'Card Generated'
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];
