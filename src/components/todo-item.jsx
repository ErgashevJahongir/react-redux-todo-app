import { removeTodo, markTodoDone } from '../actions/todos';
import { useDispatch } from 'react-redux';

const TodosItem = ({ id, title, isDone, item }) => {
    const dispatch = useDispatch();

    const handleMarkTodo = (e) => {
        dispatch(
            markTodoDone({
                id,
                title,
                isDone: e.target.checked,
            })
        );
    };

    return (
        <li
            className="list-group-item d-flex align-items-center justify-content-between abs"
            key={id}
        >
            <div>
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id={id}
                    onChange={handleMarkTodo}
                />
                <label
                    className={`form-check-label ${
                        isDone ? 'text-decoration-line-through' : ''
                    }`}
                    htmlFor={id}
                >
                    {title}
                </label>
            </div>

            <button
                className="btm btn-danger"
                onClick={() => {
                    dispatch(removeTodo(id));
                    localStorage.removeItem(`todos`);
                }}
            >
                O'chirish
            </button>
        </li>
    );
};

export default TodosItem;
