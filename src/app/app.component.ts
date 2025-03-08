import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoStore } from './store/todos.store';
import { FormsModule, NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent , FormsModule  , MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'todoAppStore';

  store = inject(TodoStore);


  onChange(value:string){
  this.store.addTodo(value);
    
  }

  ngOnInit(): void {
   
    
  }
  
}
