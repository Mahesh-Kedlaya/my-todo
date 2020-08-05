import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public description:string,
    public targetDate: Date,
    public done:boolean

  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo('Drwaing',new Date, false),
    new Todo('Swimming',new Date, false),
    new Todo('Cooking',new Date, true),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
