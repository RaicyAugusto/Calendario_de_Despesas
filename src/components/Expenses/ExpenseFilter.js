import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <form className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By year</label>
        <select value={props.selected} onChange={dropownChangeHandler}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </form>
  );
};

export default ExpenseFilter;
