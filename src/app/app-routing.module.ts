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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
