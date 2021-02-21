import { Person } from "src/app/interfaces/Person";
import { Position } from "./Position";

export interface Player {
  person: Person;
  jerseyNumber: string;
  position: Position;
}
