import { Entity } from './entity.model';

export class Actor extends Entity {

    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    banned: boolean;
    password: string;
    customToken: string;
    idToken: string;
}
