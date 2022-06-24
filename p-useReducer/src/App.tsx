import React, { useReducer } from 'react';
import Todo from './Todo';

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
  Multiply = 'MULT',
}

interface CounterState {
  count: number;
}
interface CounterAction {
  type: ActionKind;
  payload: number;
}
const initialState = { count: 0, counts: [] };

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === ActionKind.Increase) {
    return { count: state.count + action.payload };
  }
  if (action.type === ActionKind.Decrease) {
    return { count: state.count - action.payload };
  }

  return state;
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="App__header">Count with UseReducer</h1>
      <div className="App__counter">Count: {state.count}</div>
      <button
        onClick={() => dispatch({ type: ActionKind.Increase, payload: 10 })}
      >
        {' '}
        increase by 10
      </button>
      <button
        onClick={() => dispatch({ type: ActionKind.Decrease, payload: 10 })}
      >
        {' '}
        decrease by 10
      </button>
      <Todo />
    </>
  );
};

export default Counter;
