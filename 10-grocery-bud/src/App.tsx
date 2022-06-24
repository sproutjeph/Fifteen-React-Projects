import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

interface UserInput {
  id: string;
  enteredInput: string; 
}

interface Alert {
  show: boolean;
  message: string;
  type: 'success' | 'danger';
}
const App = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState('');
  const [list, setList] = useState<UserInput[]>(getLocalStorage());
  const [alert, setAlert] = useState<Alert>({
    show: false,
    message: '',
    type: 'danger',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = Math.random().toString();
    if (!enteredInput) {
      setAlert({
        ...alert,
        show: true,
        message: 'Please Enter a value',
        type: 'danger',
      });
    } else if (enteredInput && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, enteredInput: enteredInput };
          }
          return item;
        })
      );
      setEnteredInput('');
      setEditId('');
      setIsEditing(false);
      setAlert({
        ...alert,
        show: true,
        message: 'value changed',
        type: 'success',
      });
    } else {
      setList([...list, { enteredInput, id }]);
      setAlert({
        ...alert,
        show: true,
        message: 'Item Added',
        type: 'success',
      });

      setEnteredInput('');
    }
  }

  function editItem(id: string) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setEnteredInput(specificItem!?.enteredInput);
  }

  function deleteItem(id: string) {
    setList(list.filter((item) => item.id !== id));
    setAlert({
      ...alert,
      show: true,
      message: 'Item Deleted',
      type: 'danger',
    });
  }

  function clearItems() {
    setList([]);
    setAlert({
      ...alert,
      show: true,
      message: 'Items Cleared',
      type: 'danger',
    });
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [list, alert]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="App">
      {alert.show && (
        <p className={`alert alert-${alert.type}`}>{alert.message}</p>
      )}
      <h1 className="App__header">Grocery Bud</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g eggs"
          value={enteredInput}
          onChange={(e) => setEnteredInput(e.target.value)}
        />
        <button>{isEditing ? 'edit' : 'submit'}</button>
      </form>
      <ul className="list">
        {list.map((item) => (
          <li className="list-item" key={item.id}>
            <p>{item.enteredInput}</p>
            <div className="icon-contanier">
              <FaEdit className="edit-icon" onClick={() => editItem(item.id)} />
              <FaTrash
                className="delete-icon"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {list.length !== 0 && (
        <button onClick={clearItems} className="clear">
          Clear Items
        </button>
      )}
    </section>
  );
};

export default App;
