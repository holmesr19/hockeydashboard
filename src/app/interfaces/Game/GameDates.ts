import { GameSummary } from 'src/app/interfaces/Game/GameSummary';

export interface GameDates {
    date: string;
    totalGames: number;
    games: GameSummary[];
}
