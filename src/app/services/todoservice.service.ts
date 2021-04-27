import { Injectable } from '@angular/core';
import {Todo} from '../services/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todos: Todo[] = [];
  constructor() {}



  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);
  }
}
