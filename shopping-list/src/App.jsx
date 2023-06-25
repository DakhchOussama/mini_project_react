import { useState } from "react";


function App()
{

  const [items, setItems] = useState([]);

  function onRemoveItem(itemRemove)
  {
      const newItems = items.filter((item) => {
        return item !== itemRemove;
      });
    setItems(newItems);
  }

  function onSubmit(event)
  {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }


    return (
      <>
        <h1>Project 4: Shopping list</h1>
        <div className="shopping-list">
          <h2>Items To By</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="item"
              placeholder="Add a new item"
            >
            </input>
            <button>Add</button>
          </form>
          <ul>
            {items.map((item, index) => 
                (<Item item={item} key={item + index} onRemoveItem={onRemoveItem}></Item>)
            )}
          </ul>
        </div>
      </>
    );
};

function Item({item, onRemoveItem})
{
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>x</button>
    </li>
  );
}

export default App;