import './App.css';
import Todo from "./components/Todo";
import todo from "./components/Todo";
import LoginForm from "./components/Login/LoginForm";
function App() {
  // const todos = [
  //   {id:1,title:"wash dishes",completed:false},
  //   {id:2,title:"make dinner",completed:true},
  // ]
  return (
    // <div className="App">
    //   {
    //     todos.map((todo) =>{
    //         return (<Todo todo={todo} />)
    //     })
    //   }
    //
    // </div>
      <div className="App">
        <LoginForm/>
      </div>
  );
}

export default App;