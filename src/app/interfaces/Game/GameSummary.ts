import { Franchise } from 'src/app/interfaces/Franchise';
import { Venue } from 'src/app/interfaces/Venue';

export interface GameSummary {
    'gamePk': number;
      'link': string;
      'gameType': string;
      'season': string;
      'gameDate': string;
      'status': {
        'abstractGameState': string;
        'codedGameState': string;
        'detailedState': string;
        'statusCode': string;
        'startTimeTBD': boolean;
      };
      'teams': {
        'away': {
          'leagueRecord': {
            'wins': number;
            'losses': number;
            'ot': number;
            'type': string;
          },
          'score': number;
          'team': Franchise;
        },
        'home': {
          'leagueRecord': {
            'wins': number;
            'losses': number;
            'ot': number;
            'type': string;
          },
          'score': 2,
          'team': Franchise;
        }
      };
      'venue': Venue;
      'content': {
        'link': string
      };
    }

