export class Client {
    idClient: number;
    mail: string;
    nom: string;
    prenom: string;
    numCarte: number;
    password:String;
    dateExpiration: string;
    role:Array<Role>[]
  }
  export class Role{
    id: number;
    role:  string;
  }