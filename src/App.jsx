import { useState } from "react";
import "./App.css";
import CounterItem from "./CounterItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item Number 1", count: 0 },
    { id: 2, name: "Item Number 2", count: 0 },
    { id: 3, name: "Item Number 3", count: 0 },
    { id: 4, name: "Item Number 4", count: 0 },
    { id: 5, name: "Item Number 5", count: 0 },
  ]);

  // const addItem = () => {};
  const resetItem = () => {
    const newArrayItem = items.map((item) => {
      item.count = 0;
      return item;
    });
    setItems(newArrayItem);
  };
  const loadItem = () => {
    setItems([
      { id: 1, name: "Item Number 1", count: 0 },
      { id: 2, name: "Item Number 2", count: 0 },
      { id: 3, name: "Item Number 3", count: 0 },
      { id: 4, name: "Item Number 4", count: 0 },
      { id: 5, name: "Item Number 5", count: 0 },
    ]);
  };
  const deleteItem = (id) => {
    const filteredArray = items.filter((item) => {
      return item.id != id;
    });

    setItems(filteredArray);
  };
  const itemOperation = (operation, id) => {
    if (operation == "increment") {
      const newArrayItem = items.map((item) => {
        if (item.id == id) {
          item.count = parseInt(item.count) + 1;
          return item;
        }
        return item;
      });
      setItems(newArrayItem);
    }

    if (operation == "decrement") {
      const newArrayItem = items.map((item) => {
        if (item.id == id) {
          if (item.count != 0) {
            item.count = parseInt(item.count) - 1;
          }
          return item;
        }
        return item;
      });
      setItems(newArrayItem);
    }
  };

  const calculateCart = () => {
    const cartItems = [];
    items.forEach((item) => {
      if (item.count != 0) {
        cartItems.push(item);
      }
    });
    return cartItems.length;
  };

  return (
    <div className="counter-container ">
      {/* nav  */}
      <nav className="">
        <i className="bi bi-cart-check-fill counter__nav_cart"></i>
        <span className="counter__nav_pill  fw-bold">{calculateCart()}</span>
      </nav>

      {/* content  */}
      {/** action **/}
      <div className=" content__action_wrap">
        <button
          className="bi bi-recycle btn btn-success content__reset_button"
          onClick={resetItem}
        >
          Reset
        </button>
        <button
          className="bi bi-arrow-clockwise btn btn-primary content__reset_button"
          onClick={loadItem}
        >
          Load
        </button>
      </div>

      {/** items **/}
      {items.map((item) => {
        return (
          <CounterItem
            key={item.id}
            id={item.id}
            count={item.count}
            itemOperation={itemOperation}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default App;
