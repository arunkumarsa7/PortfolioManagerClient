import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MessagesUtil {

    private errorMessages: any;
    private infoMessages: any;
    private warningMessages: any;

    constructor(private http: HttpClient) {
    }

    load() {
        const jsonFile = `assets/messages/error-messages.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then(response => {
                this.errorMessages = response;
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }

    public getErrorMessage(key: any) {
        return this.errorMessages[key];
    }

    public getInfoMessage(key: any) {
        return this.infoMessages[key];
    }

    public getWarningMessage(key: any) {
        return this.warningMessages[key];
    }

}
