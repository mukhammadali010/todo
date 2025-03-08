import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Todos } from "./todos.model"


type TodoStore = {
    todos: Todos[];
    editingId:number | null
}


const initialState: TodoStore = {
    todos: [],
    editingId:null,
}

export const TodoStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store)=>({
        addTodo(newTodoTitle:string){
            const newTodo:Todos = {
                id:store.todos().length+1,
                title:newTodoTitle,
                complated:false,
            }
            patchState(store , {todos: [newTodo ,  ...store.todos()]})
        },

        deleteTodo(id:number){
           const updatedTodo = store.todos().filter((value)=>value.id !== id);
           patchState(store , {todos: updatedTodo , editingId:null})

        },

        editTodo(id:number , editedTitle:string){
          
            const clicked = id? true:false;
            
            const editedTodo = store.todos().map((value)=>value.id === id ? {...value , title:editedTitle }: value);

            patchState(store , {todos: editedTodo})
        },
        startEditing(id:number){
            patchState(store , {editingId:id} )
        },
        editSave(id:number , newTitle:string){
            const savedTitle = store.todos().map(value=>value.id == id ? {...value , title:newTitle}: value);

            patchState(store ,{todos:savedTitle , editingId:null});
        },
        cancelEdit(){
            patchState(store , {editingId:null})
        },
        toggleComplate(id:number){
            const updateToggle = store.todos().map(value =>value.id == id? {...value , complated:!value.complated}: value);
            patchState(store , {todos:updateToggle})
        }
        
    }))
)