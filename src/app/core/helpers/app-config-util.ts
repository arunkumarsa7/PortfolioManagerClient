import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/shared/constant/app-constants';

@Injectable({
    providedIn: 'root'
})
export class AppConfigUtil {

    private appConfigs: any;

    constructor(private http: HttpClient) {
    }

    load() {
        const jsonFile = `assets/config/app-config.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then(response => {
                this.appConfigs = response;
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }

    public getAppConfig(key: any) {
        return this.appConfigs[key];
    }

    public getUserIdleTimeOutInSec() {
        return this.appConfigs[AppConstants.APP_USER_IDLE_TIME_IN_SEC];
    }

    public getUserTimeOutInSec() {
        return this.appConfigs[AppConstants.APP_USER_TIME_OUT_IN_SEC];
    }

    public getUserKeepAliveInSec() {
        return this.appConfigs[AppConstants.APP_USER_KEEP_ALIVE_IN_SEC];
    }

    public getErrorMessageDurationInMillSec() {
        return this.appConfigs[AppConstants.APP_SHOW_ERROR_MSG_DURATIN_IN_MILLI_SEC];
    }

    public getWarningMessageDurationInMillSec() {
        return this.appConfigs[AppConstants.APP_SHOW_WARNING_MSG_DURATIN_IN_MILLI_SEC];
    }

    public getInfoMessageDurationInMillSec() {
        return this.appConfigs[AppConstants.APP_SHOW_INFO_MSG_DURATIN_IN_MILLI_SEC];
    }

    public getSuccessMessageDurationInMillSec() {
        return this.appConfigs[AppConstants.APP_SHOW_SUCCESS_MSG_DURATIN_IN_MILLI_SEC];
    }

}
