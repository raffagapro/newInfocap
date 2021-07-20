import { ProfCategory } from "./profCategory.model";
import { ProSolicitud } from "./proSolicitud.model";
import { SolicitudObject } from "./solicitudObject.model";

export class Solicitud {
	public paymentId: string;
	constructor(
		public category_id: string,
		public comuna_id: string,
		public address: string,
		public proPerfil_id: string,
		public proPerfil: ProfCategory,
		public proPhoto: string,
		public solicitudID: string,
		public solicitudOBJ: SolicitudObject,
		public solicitudProOBJ: ProSolicitud,
		public profId: string,
		public newDate: string,
		public newTime: string,
		public instructions: string
	) {}
}

export enum ServiceStatus {
	SolicitudEnviada = 1,
	VisitaTecnica = 2,
	ServicioAgendado = 3,
	ServicioProceso = 4,
	ServicioRealizado = 5,
	ServicioFinalizado = 6,
	ServicioRechazado = 7,
	ServicioPagado = 8,
	ServicioPendienteDePago = 9,
	TicketCancelado = 11,
}
