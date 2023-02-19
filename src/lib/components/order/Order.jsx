import React from "react";

const Order = ({ ...props }) => {
  return (
    <div className="order">
      {props.order === "asc" ? (
        <span
          className="material-symbols-outlined"
          onClick={(e) => {
            props.setOrder("desc");
          }}
        >
          swap_vert
        </span>
      ) : (
        <span
          className="material-symbols-outlined inverse"
          onClick={(e) => {
            props.setOrder("asc");
          }}
        >
          swap_vert
        </span>
      )}
      <p className="order-title">{props.order}</p>
    </div>
  );
};

export default Order;
