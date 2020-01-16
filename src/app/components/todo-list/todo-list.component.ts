import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[];
  todoTitle: string;
  todoId: number = 4;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Shop food',
        'completed': false,
        'editing': false,        
      },
      {
        'id': 2,
        'title': 'Wash laundry',
        'completed': false,
        'editing': false,        
      },
      {
        'id': 3,
        'title': 'Clean up kitchen',
        'completed': false,
        'editing': false,        
      },
    ];
  }

  addTodo(): void{
    if (this.todoTitle.trim().length === 0){
      return;
    }
    
    this.todos.push({
      id: this.todoId++,
      title: this.todoTitle,
      completed: false,
      editing: false, 
    });

    this.todoTitle = "";
  }

  deleteTodo(id: number): void{
    this.todos = this.todos.filter( todo => todo.id != id);
  }

  editTodo(todo: ToDo):void{
    todo.editing = true;
  }

  doneEditing(todo: ToDo):void{
    todo.editing = false;
  }

}

