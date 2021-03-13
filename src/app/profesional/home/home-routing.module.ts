import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProGuard } from 'src/app/guards/pro.guard';
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
            loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
            // canLoad: [AuthGuard, ProGuard],
          },
        ] 
      },
      { 
        path: 'agendados', children:
        [
          {
            path: '',
            loadChildren: () => import('./agendados/agendados.module').then( m => m.AgendadosPageModule),
            // canLoad: [AuthGuard, ProGuard],
          },
        ] 
      },
      { 
        path: 'finalizados', children:
        [
          {
            path: '',
            loadChildren: () => import('./finalizados/finalizados.module').then( m => m.FinalizadosPageModule),
            // canLoad: [AuthGuard, ProGuard],
          },
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
