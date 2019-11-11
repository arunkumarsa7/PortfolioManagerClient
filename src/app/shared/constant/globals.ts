import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    appPage = 'home';
    currentOE = 'DE';
    currentServiceOffering = '';
    currentProject = '';
    currentOEId: number;
    currentServiceOfferingId: number;
    currentPortfolioId: number;
}
