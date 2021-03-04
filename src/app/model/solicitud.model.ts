import { ProfCategory } from "./profCategory.model";

export class Solicitud{
    constructor(
            public category_id: string,
            public comuna_id: string,
            public address: string,
            public proPerfil_id: string,
            public proPerfil: ProfCategory,
            public proPhoto: string,
            public solicitudID: string,
    ) {}
}