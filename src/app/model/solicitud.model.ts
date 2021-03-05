import { ProfCategory } from "./profCategory.model";
import { ProSolicitud } from "./proSolicitud.model";
import { SolicitudObject } from "./solicitudObject.model";

export class Solicitud{
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
    ) {}
}