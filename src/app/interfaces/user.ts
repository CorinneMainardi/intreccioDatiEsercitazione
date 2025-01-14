import { iTodo } from './todo';

export interface iUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  toDo?: iTodo[];
}
