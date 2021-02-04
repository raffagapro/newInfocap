import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user/home',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user/perfil',
    loadChildren: () => import('./user/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'user/map',
    loadChildren: () => import('./user/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'user/profesional-list',
    loadChildren: () => import('./user/profesional-list/profesional-list.module').then( m => m.ProfesionalListPageModule)
  },
  {
    path: 'user/profesional-detail',
    loadChildren: () => import('./user/profesional-detail/profesional-detail.module').then( m => m.ProfesionalDetailPageModule)
  },
  {
    path: 'user/solicitud-servicio',
    loadChildren: () => import('./user/solicitud-servicio/solicitud-servicio.module').then( m => m.SolicitudServicioPageModule)
  },
  {
    path: 'user/solicitudes',
    loadChildren: () => import('./user/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'user/solicitud-detail',
    loadChildren: () => import('./user/solicitud-detail/solicitud-detail.module').then( m => m.SolicitudDetailPageModule)
  },
  {
    path: 'user/solicitud-status',
    loadChildren: () => import('./user/solicitud-status/solicitud-status.module').then( m => m.SolicitudStatusPageModule)
  },
  {
    path: 'user/servicio-pagar',
    loadChildren: () => import('./user/servicio-pagar/servicio-pagar.module').then( m => m.ServicioPagarPageModule)
  },
  {
    path: 'user/servicio-pagar-forma',
    loadChildren: () => import('./user/servicio-pagar-forma/servicio-pagar-forma.module').then( m => m.ServicioPagarFormaPageModule)
  },
  {
    path: 'user/seval-prof',
    loadChildren: () => import('./user/eval-prof/eval-prof.module').then( m => m.EvalProfPageModule)
  },
  {
    path: 'user/visita-detail',
    loadChildren: () => import('./user/visita-detail/visita-detail.module').then( m => m.VisitaDetailPageModule)
  },
  {
    path: 'user/notificaciones',
    loadChildren: () => import('./user/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'user/prof-contactados-list',
    loadChildren: () => import('./user/prof-contactados-list/prof-contactados-list.module').then( m => m.ProfContactadosListPageModule)
  },
  {
    path: 'user/urgen-service',
    loadChildren: () => import('./user/urgen-service/urgen-service.module').then( m => m.UrgenServicePageModule)
  },
  {
    path: 'profesional/home',
    loadChildren: () => import('./profesional/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profesional/notificaciones',
    loadChildren: () => import('./profesional/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'profesional/wallet',
    loadChildren: () => import('./profesional/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'profesional/rating',
    loadChildren: () => import('./profesional/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'profesional/perfil',
    loadChildren: () => import('./profesional/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
