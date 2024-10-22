import { iTodo } from './../interfaces/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: iTodo[] = [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      completed: false,
      userId: 48,
    },
    {
      id: 3,
      todo: 'Watch a classic movie',
      completed: false,
      userId: 4,
    },
    {
      id: 4,
      todo: 'Contribute code or a monetary donation to an open-source software project',
      completed: false,
      userId: 48,
    },
    {
      id: 5,
      todo: "Solve a Rubik's cube",
      completed: false,
      userId: 31,
    },
    {
      id: 6,
      todo: 'Bake pastries for me and neighbor',
      completed: false,
      userId: 39,
    },
    {
      id: 7,
      todo: 'Go see a Broadway production',
      completed: false,
      userId: 32,
    },
    {
      id: 8,
      todo: 'Write a thank you letter to an influential person in my life',
      completed: true,
      userId: 13,
    },
    {
      id: 9,
      todo: 'Invite some friends over for a game night',
      completed: false,
      userId: 47,
    },
  ];
  constructor() {}
}
