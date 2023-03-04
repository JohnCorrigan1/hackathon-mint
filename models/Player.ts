import { PlayerClass } from './playerClass';

export interface Player {
    id: string;
    tokenId: string;
    level: number;
    xp: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    luck: number;
    pointsToSpend: number;
    playerClass: PlayerClass;
    body: null;
    head: null;
    legs: null;
    feet: null;
}