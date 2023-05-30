import {render,screen,cleanup} from "@testing-library/react";
import  renderer from 'react-test-renderer';
import Todo from "../Todo";
afterEach(() => {
    cleanup();
})
test('Should render non-completed component',() => {
    const todo =  {id:1,title:"wash dishes",completed:false}
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash dishes");
    expect(todoElement).not.toContainHTML("<strike>");
})
test('Should render completed todo',() => {
    const todo =  {id:2,title:"wash car",completed:true}
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash car");
    expect(todoElement).not.toContainHTML('<strike>');
})
