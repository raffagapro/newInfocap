export class User {
  constructor(
    public id: string,
    public name: string,
    public last_name: string,
    public img_profile: string,
    public email: string,
    public phone1: string,
    public phone2: string,
    public role: string,
    public access_token: string,
  ) { }
}

export enum UserRoles {
  USER = 'usuario',
  PROFESSIONAL = 'profesional',
}
