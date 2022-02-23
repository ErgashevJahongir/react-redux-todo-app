import { useSelector } from 'react-redux';
import TodosItem from './todo-item';

const TodosItems = () => {
    const todos = useSelector((state) => state.todos);
    // console.log(todos);

    return (
        <ul className="list-group list-group-flush">
            {todos.length > 0 ? (
                todos.map((item) => (
                    <TodosItem
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        isDone={item.isDone}
                        item={item}
                    />
                ))
            ) : (
                <h3 className="text-center mb-3 mt-3">
                    Hali eslatma qo'shilmagan
                </h3>
            )}
        </ul>
    );
};

export default TodosItems;
