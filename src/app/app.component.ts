import { iTodo } from './interfaces/todo';
import { iUser } from './interfaces/user';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AndreaAngular';
  todosArray: iTodo[] = [];
  usersArray: iUser[] = [];
  constructor(private userSvc: UserService, private todoSvc: TodoService) {}
  ngOnInit() {
    this.todosArray = this.todoSvc.todos;
    this.usersArray = this.userSvc.users;
    this.getUserWithTodo();
  }
  getUserWithTodo() {
    console.log(this.userSvc.getUserWithTodo(this.todosArray));
  }
}
