export class ProfCategory{
    constructor(
     public categoryName: string,
     public category_id: string,
     public communeName: string,
     public commune_id: string,
     public description: string,
     public hours: string,
     public id: string,
     public images: [],
     public supplierLastName: string,
     public supplierName: string,
     public transportName: string,
     public transport_id: string,
     public work_days: string,
     public categories: any[],
    ) {}
  }