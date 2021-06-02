export class ProSolicitud{
    constructor(
        public clientLastName: string,
        public clientName: string,
        public clientImg: string,
        public clientPhone: string,
        public images: [],
        public category_id: string,
        public categoryName: string,
        public date_required: string,        
        public description: string,
        public hours: string,
        public id: string,
        public status_id: number,
        public cost: {},
        public supplierLastName: string,
        public supplierName: string,
        public ticket_number: string,
        public aditional: [],
        public type: string,
    ){}
}