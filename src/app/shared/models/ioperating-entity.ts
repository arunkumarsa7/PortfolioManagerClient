import { ICountry } from 'src/app/shared/models/icountry';

export class IOperatingEntity {
    id: number;
    name: string;
    country: ICountry;
}
