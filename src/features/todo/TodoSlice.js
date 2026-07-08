import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState={
  todos:[{id:1,
  text:"ramhanuman"}]
  
};

export const TodoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const todo={
        id:nanoid(),
        text:action.payload
      }
      state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter(todo=>todo.id!==action.payload)
    },
    updateTodo:(state,action)=>{
      //state.todos=state.todos.map((todo)=>(todo.id===action.payload)?{...todo,text:action.payload}:todo)

      
      const todo=state.todos.find((todo)=>todo.id===action.payload.id);
      if(todo){
        todo.text=action.payload.text;
      }
    }
  }
})

export const {addTodo,removeTodo,updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;