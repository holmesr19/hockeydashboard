import { GameDates } from 'src/app/interfaces/Game/GameDates';
import { Person } from 'src/app/interfaces/Person';
import { IdName } from 'src/app/interfaces/IdName';

export interface GamesRes {
    dates: GameDates[];
}

export interface BoxScore {
    teams: BoxAwayHome;
    officials: Official[];
}

export interface BoxAwayHome {
    away: BoxTeam;
    home: BoxTeam;
}

export interface BoxTeam {
    team: IdName;
    teamStats: TeamStats;
    players: any[];
    goalies: number[];
    skaters: number[];
    onIce: number[];
    scratches: number[];
    coaches: Person[];
}

export interface TeamStats {
    teamSkaterStats: TeamSkaterStats;
}

export interface TeamSkaterStats {
    goals: number;
    pim: number;
    shots: number;
    powerPlayPercentage: string;
    powerPlayGoals: number;
    powerPlayOpportunities: number;
    faceOffWinPercentage: string;
    blocked: number;
    takeaways: number;
    giveaways: number;
    hits: number;
}

export interface Official {
    official: Person;
    officialType: string;
}
