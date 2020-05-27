import { PlayerStats } from 'src/app/interfaces/PlayerStats';
import { IdName } from 'src/app/interfaces/IdName';

export interface StatsObj {
    'season': string;
    'stat': PlayerStats;
    'team': IdName;
    'league': IdName;
    'sequenceNumber': number;
}
