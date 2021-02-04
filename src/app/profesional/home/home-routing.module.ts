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
          },
          {
            path: 'solicitudes-detail',
            loadChildren: () => import('./solicitudes/solicitudes-detail/solicitudes-detail.module').then( m => m.SolicitudesDetailPageModule)
          },
          {
            path: 'definicion-servicio',
            loadChildren: () => import('./solicitudes/definicion-servicio/definicion-servicio.module').then( m => m.DefinicionServicioPageModule)
          },
          {
            path: 'visita-tecnica',
            loadChildren: () => import('./solicitudes/visita-tecnica/visita-tecnica.module').then( m => m.VisitaTecnicaPageModule)
          },
        ] 
      },
      { 
        path: 'agendados', children:
        [
          {
            path: '',
            loadChildren: () => import('./agendados/agendados.module').then( m => m.AgendadosPageModule)
          },
          {
            path: 'agendados-detail',
            loadChildren: () => import('./agendados/agendados-detail/agendados-detail.module').then( m => m.AgendadosDetailPageModule)
          },
          {
            path: 'agendados-finalizar',
            loadChildren: () => import('./agendados/agendados-finalizar/agendados-finalizar.module').then( m => m.AgendadosFinalizarPageModule)
          },
          {
            path: 'servicios-adicionales',
            loadChildren: () => import('./agendados/servicios-adicionales/servicios-adicionales.module').then( m => m.ServiciosAdicionalesPageModule)
          },
        ] 
      },
      { 
        path: 'finalizados', children:
        [
          {
            path: '',
            loadChildren: () => import('./finalizados/finalizados.module').then( m => m.FinalizadosPageModule)
          },
          {
            path: 'finalizados-details',
            loadChildren: () => import('./finalizados/finalizados-details/finalizados-details.module').then( m => m.FinalizadosDetailsPageModule)
          },
          {
            path: 'rate-form',
            loadChildren: () => import('./finalizados/rate-form/rate-form.module').then( m => m.RateFormPageModule)
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
