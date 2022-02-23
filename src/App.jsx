import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeTodos } from './actions/todos';
import TodosFooter from './components/todos-footer';
import TodosForm from './components/todos-form';
import TodosHeader from './components/todos-header';
import TodosItems from './components/todos-items';

function App() {
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todos);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos !== null) {
            dispatch(initializeTodos(todos));
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-5">
                        <TodosHeader length={todoItems.length} />
                        <TodosForm />
                        <TodosItems />
                        <TodosFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
