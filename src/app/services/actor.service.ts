
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Actor } from '../model/actor.model';
import { AuthService } from './auth.service';

@Injectable()
export class ActorService {

    token: string;
    userRole: string;
    private backendApiBaseURL = 'http://localhost:8080';

    constructor(
        private http: HttpClient,
        private authService: AuthService) {
    }

    getActor(id: string) {
        const url = `${this.backendApiBaseURL}/actors/${id}`;
        return this.http.get<Actor>(url, {
            headers: new HttpHeaders({
                'X-API-Version': 'v2'
            })
        }).toPromise();
    }

    updateProfile(actor: Actor) {
        const url = `${this.backendApiBaseURL}/actors/${actor._id}`;

        const putActor = JSON.parse(JSON.stringify(actor));
        delete putActor.idToken;
        delete putActor.customToken;
        delete putActor.password;

        const body = JSON.stringify(putActor);

        return new Promise<any>((resolve, reject) => {
            this.http.put(url, body,   {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'idToken': actor.idToken,
                  'X-API-Version': 'v2'
                })}).toPromise()
                .then(res => {
                    resolve(res);
                }, err => { console.log(err); reject(err); });
        });
    }
}
