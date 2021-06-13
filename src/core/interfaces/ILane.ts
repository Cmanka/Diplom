import { ICard } from './ICard';

export interface ILane {
  id: string;
  title: string;
  cards: ICard[];
}
