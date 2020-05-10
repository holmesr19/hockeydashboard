import { Venue } from 'src/app/interfaces/Venue';
import { Conference } from 'src/app/interfaces/Conference';
import { Division } from 'src/app/interfaces/Division';
import { Franchise } from 'src/app/interfaces/Franchise';

export interface Team {
    id: number;
    name: string;
    venue: Venue;
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: Division;
    conference: Conference;
    franchise: Franchise;
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
}
