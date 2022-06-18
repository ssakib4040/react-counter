import React from "react";

const CounterItem = (props) => {
  return (
    <div className="counter__items_wrap ">
      <button className="btn btn-warning  fw-bold">
        {props.count === 0 ? "Zero" : props.count}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => props.itemOperation("increment", props.id)}
      >
        <i className="bi bi-plus-circle"></i>
      </button>
      <button
        className="btn btn-primary"
        onClick={() => props.itemOperation("decrement", props.id)}
      >
        <i className="bi bi-dash-circle"></i>
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.deleteItem(props.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default CounterItem;
