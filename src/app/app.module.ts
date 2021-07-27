import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage-angular";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

// geolocation and native-geocoder
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConfirmSuccessModalComponent as CSprofAgendfinal } from "./profesional/home/agendados/agendados-finalizar/confirm-success-modal/confirm-success-modal.component";
import { ConfirmSuccessModalComponent as CSuserSolServ } from "./user/solicitud-servicio/confirm-success-modal/confirm-success-modal.component";
import { ConfirmSuccessModalComponent as CSuserSolDetail } from "./user/solicitud-detail/confirm-success-modal/confirm-success-modal.component";
import { ConfirmSuccessModalComponent as CSuserEvalProf } from "./user/eval-prof/confirm-success-modal/confirm-success-modal.component";
import { ConfirmSuccessModalComponent as CSuserVisDetail } from "./user/visita-detail/confirm-success-modal/confirm-success-modal.component";
import { ConfirmSuccessModalComponent as CSuserUrgServ } from "./user/urgen-service/confirm-success-modal/confirm-success-modal.component";
import { SolicitudRechazadaModalComponent } from "./user/solicitud-status/solicitud-rechazada-modal/solicitud-rechazada-modal.component";
import { SolicitudEnviadaModalComponent } from "./user/solicitud-status/solicitud-enviada-modal/solicitud-enviada-modal.component";
import { ServicioAgendadoModalComponent } from "./user/solicitud-status/servicio-agendado-modal/servicio-agendado-modal.component";
import { PagoExitosoModalComponent } from "./user/servicio-pagar-forma/pago-exitoso-modal/pago-exitoso-modal.component";
import { SuccessModalComponent as CSuserPay } from "./login/register/success-modal/success-modal.component";
import { ConfirmSuccessComponent as CSprofSol } from "./profesional/home/solicitudes/confirm-success/confirm-success.component";
import { ConfirmSuccessComponent as CSprofSolDefServ } from "./profesional/home/solicitudes/definicion-servicio/confirm-success/confirm-success.component";
import { ConfirmSuccessComponent as CSprofFinRatForm } from "./profesional/home/finalizados/rate-form/confirm-success/confirm-success.component";
import { ServiceRejectModalComponent } from "./profesional/home/solicitudes/service-reject-modal/service-reject-modal.component";
import { ConfirmVisitaComponent } from "./profesional/home/solicitudes/visita-tecnica/confirm-visita/confirm-visita.component";
import { ConfirmServComponent } from "./profesional/home/solicitudes/definicion-servicio/confirm-serv/confirm-serv.component";
import { SuccessModalComponent as CSUserProfileUpdate } from "./user/profile-page/success-modal/success-modal.component";
import { SuccessModalComponent as CSproProfileUpdate } from "./profesional/perfil/success-modal/success-modal.component";
import { SuccessModalComponent as CSproCatProfileUpdate } from "./profesional/cat-perfiles/success-modal/success-modal.component";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NotificationsService } from "./services/notifications-service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Facebook } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@NgModule({
	declarations: [
		AppComponent,
		CSprofAgendfinal,
		CSuserSolServ,
		CSuserSolDetail,
		CSuserEvalProf,
		CSuserVisDetail,
		CSuserUrgServ,
		SolicitudRechazadaModalComponent,
		SolicitudEnviadaModalComponent,
		ServicioAgendadoModalComponent,
		PagoExitosoModalComponent,
		CSuserPay,
		CSprofSol,
		CSprofSolDefServ,
		CSprofFinRatForm,
		ServiceRejectModalComponent,
		ConfirmVisitaComponent,
		ConfirmServComponent,
		CSUserProfileUpdate,
		CSproProfileUpdate,
		CSproCatProfileUpdate,
	],
	entryComponents: [],
	imports: [
		CommonModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		IonicStorageModule.forRoot(),
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [
		StatusBar,
		SplashScreen,
		CallNumber,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		Geolocation,
		NativeGeocoder,
		NotificationsService,
		ScreenOrientation,
		Facebook,
    GooglePlus
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
