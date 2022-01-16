import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);

  const handleIncreaseClick = () => {
    //click ==> dispatch(action)
    dispatch(increase());
  };
  const handleDecreaseClick = () => {
    //click ==> dispatch(action)
    dispatch(decrease());
  };

  return (
    <div>
      counter: {counter}
      <button onClick={handleDecreaseClick}>-</button>
      <button onClick={handleIncreaseClick}>+</button>
    </div>
  );
}

export default CounterFeature;
