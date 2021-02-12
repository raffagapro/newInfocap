export class User{
    constructor(
      public id: string,
      public name: string,
      public last_name: string,
      public img_profile: string,
      public email: string,
      public role: string,
      public access_token: string,
    ) {}
  }