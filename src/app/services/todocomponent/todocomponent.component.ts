import { Component, OnInit } from '@angular/core';
import {TodoserviceService} from '../todoservice.service';
import {Todo} from '../model/Todo';
@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.css']
})
export class TodocomponentComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();

  constructor(
    private todoService: TodoserviceService,
   // private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  //  this.toaster.info('Bienvenu dans le gestionnaire de Todo');
  }

  addTodo(): void {
    this.todoService.addTodo(this.todo);
  //  this.toaster.success(`Le todo ${this.todo.name} a été ajouté avec succès`);
    this.todo = new Todo();
  }
  delete(todo: Todo): void {
  //  this.toaster.success(`Le todo ${todo.name} a été supprimé avec succès`);
    this.todoService.deleteTodo(todo);
  }
}
