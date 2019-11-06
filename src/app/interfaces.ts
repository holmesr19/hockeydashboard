export interface IRosterResponse {
    copyright: string;
    roster: [IRoster];
}

export interface IRoster {
    person: IPerson;
    jerseyNumber: string;
    position: IPosition;
}

export interface IPerson {
    id: number;
    fullName: string;
    link: string;
}

export interface IPosition {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}
