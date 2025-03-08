import { Component, inject } from '@angular/core';
import { TodoStore } from '../../store/todos.store';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  store = inject(TodoStore);
}
