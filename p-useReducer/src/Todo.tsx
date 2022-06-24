import React, { useReducer, useState } from 'react';

enum ActionKinds {
  'ADD_ITEM' = 'ADD_ITEM',
  'REMOVE_ITEM' = 'REMOVE_ITEM',
}

interface Item {
  id: string;
  name?: string;
}

interface State {
  list: Item[];
}
interface Action {
  type: ActionKinds;
  payload: Item;
}

const initialState = {
  list: [],
};

const reducer = (state: State, action: Action) => {
  if (action.type === ActionKinds.ADD_ITEM) {
    const newItems = [...state.list, action.payload];

    return { ...state, list: newItems };
  }
  if (action.type === ActionKinds.REMOVE_ITEM) {
    const newItems = state.list.filter((item) => item.id !== action.payload.id);

    return { ...state, list: newItems };
  }
  return state;
};
const Todo = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
    dispatch({
      type: ActionKinds.ADD_ITEM,
      payload: { id: new Date().toString(), name },
    });
  }

  function removeHandler(id: string) {
    dispatch({ type: ActionKinds.REMOVE_ITEM, payload: { id } });
  }

  return (
    <section className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add-btn" type="submit">
          add
        </button>
      </form>
      <ul>
        {state.list.map((item) => (
          <li key={item.id}>
            {item.name}

            <button className="remove" onClick={() => removeHandler(item.id)}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
