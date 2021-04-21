import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProGuard } from './guards/pro.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
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
    path: 'recovery',
    loadChildren: () => import('./login/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'user/home',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/profile-page',
    loadChildren: () => import('./user/profile-page/profile-page.module').then( m => m.ProfilePagePageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/map',
    loadChildren: () => import('./user/mapa/mapa.module').then( m => m.MapaPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/profesional-list',
    loadChildren: () => import('./user/profesional-list/profesional-list.module').then( m => m.ProfesionalListPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/profesional-detail',
    loadChildren: () => import('./user/profesional-detail/profesional-detail.module').then( m => m.ProfesionalDetailPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/solicitud-servicio',
    loadChildren: () => import('./user/solicitud-servicio/solicitud-servicio.module').then( m => m.SolicitudServicioPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  /*
  {
    path: 'user/solicitud-urgente-servicio',
    loadChildren: () => import('./user/solicitud-urgente-servicio/solicitud-urgente-servicio.module').then( m => m.SolicitudUrgenteServicioPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  */
  {
    path: 'user/solicitudes',
    loadChildren: () => import('./user/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/solicitud-detail',
    loadChildren: () => import('./user/solicitud-detail/solicitud-detail.module').then( m => m.SolicitudDetailPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/service-resume',
    loadChildren: () => import('./user/service-resume/service-resume.module').then( m => m.ServiceResumePageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/solicitud-status',
    loadChildren: () => import('./user/solicitud-status/solicitud-status.module').then( m => m.SolicitudStatusPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/servicio-pagar',
    loadChildren: () => import('./user/servicio-pagar/servicio-pagar.module').then( m => m.ServicioPagarPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/servicio-pagar-forma',
    loadChildren: () => import('./user/servicio-pagar-forma/servicio-pagar-forma.module').then( m => m.ServicioPagarFormaPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/seval-prof',
    loadChildren: () => import('./user/eval-prof/eval-prof.module').then( m => m.EvalProfPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/visita-detail',
    loadChildren: () => import('./user/visita-detail/visita-detail.module').then( m => m.VisitaDetailPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/notificaciones',
    loadChildren: () => import('./user/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/prof-contactados-list',
    loadChildren: () => import('./user/prof-contactados-list/prof-contactados-list.module').then( m => m.ProfContactadosListPageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'user/single-prof-services',
    loadChildren: () => import('./user/prof-contactados-list/single-prof-services/single-prof-services.module').then( m => m.SingleProfServicesPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'user/urgen-service',
    loadChildren: () => import('./user/urgen-service/urgen-service.module').then( m => m.UrgenServicePageModule),
    // canLoad: [AuthGuard, UserGuard],
  },
  {
    path: 'profesional/home',
    loadChildren: () => import('./profesional/home/home.module').then( m => m.HomePageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/notificaciones',
    loadChildren: () => import('./profesional/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/wallet',
    loadChildren: () => import('./profesional/wallet/wallet.module').then( m => m.WalletPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/rating',
    loadChildren: () => import('./profesional/rating/rating.module').then( m => m.RatingPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/perfil',
    loadChildren: () => import('./profesional/perfil/perfil.module').then( m => m.PerfilPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/cat-perfiles',
    loadChildren: () => import('./profesional/cat-perfiles/cat-perfiles.module').then( m => m.CatPerfilesPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/solicitudes/solicitudes-detail',
    loadChildren: () => import('./profesional/home/solicitudes/solicitudes-detail/solicitudes-detail.module').then( m => m.SolicitudesDetailPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/solicitudes/definicion-servicio',
    loadChildren: () => import('./profesional/home/solicitudes/definicion-servicio/definicion-servicio.module').then( m => m.DefinicionServicioPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/solicitudes/visita-tecnica',
    loadChildren: () => import('./profesional/home/solicitudes/visita-tecnica/visita-tecnica.module').then( m => m.VisitaTecnicaPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/agendados/agendados-detail',
    loadChildren: () => import('./profesional/home/agendados/agendados-detail/agendados-detail.module').then( m => m.AgendadosDetailPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/agendados/agendados-finalizar',
    loadChildren: () => import('./profesional/home/agendados/agendados-finalizar/agendados-finalizar.module').then( m => m.AgendadosFinalizarPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/agendados/servicios-adicionales',
    loadChildren: () => import('./profesional/home/agendados/servicios-adicionales/servicios-adicionales.module').then( m => m.ServiciosAdicionalesPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/finalizados/finalizados-details',
    loadChildren: () => import('./profesional/home/finalizados/finalizados-details/finalizados-details.module').then( m => m.FinalizadosDetailsPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
  {
    path: 'profesional/finalizadosrate-form',
    loadChildren: () => import('./profesional/home/finalizados/rate-form/rate-form.module').then( m => m.RateFormPageModule),
    // canLoad: [AuthGuard, ProGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
