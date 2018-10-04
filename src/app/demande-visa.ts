import { Client } from "./client";
import { Typevisa } from "./Typevisa";

export class DemandeVisa {
    idDemandeVisa: number;
    requestCountry: string;
    nationalite: string;
    travelDate: string;
    dateDebut: string;
    dateFin: string;
    periode: string;
    prix: number;
    commentaire: string;
    client: Client;
    typeVisa: Typevisa;
}
