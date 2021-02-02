import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home-tabs',
    component: HomePage,
    children: [
      { 
        path: 'solicitudes', children:
        [
          {
            path: '',
            loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
          }
        ] 
      },
      { 
        path: 'agendados', children:
        [
          {
            path: '',
            loadChildren: () => import('./agendados/agendados.module').then( m => m.AgendadosPageModule)
          }
        ] 
      },
      { 
        path: 'finalizados', children:
        [
          {
            path: '',
            loadChildren: () => import('./finalizados/finalizados.module').then( m => m.FinalizadosPageModule)
          }
        ] 
      },
      {
        path: '',
        redirectTo: '/profesional/home/home-tabs/agendados',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/profesional/home/home-tabs/agendados',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
