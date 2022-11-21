import "./App.css";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";
import TodoForm from "./TodoForm";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;
