import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import image from "../assets/image/expenses.jpg";
import TransactionsCard from './TransactionsCard';

const TransactionsIncome = () => {
  const [transactionsArr, setTransactionsArr] = useState("");
  let arr = JSON.parse(localStorage.getItem("income")) || [];
  let total = 0;

  const totalResult = () => {
    arr.map((el) => (total += +el.cost));
  };

  const deleteTransaction = (id) => {
    let requestDelete = window.confirm("Do you want to fly this debt");
    if (requestDelete) {
      let newArr = arr.filter((debt) => debt.id !== id);
      localStorage.setItem("income", JSON.stringify(newArr));
      setTransactionsArr({});
    }
  };
  return (
    <div className="transactions">
      <nav className="flex justify-between items-center px-3">
        <h3 className="font-medium text-xl">Transactions</h3>
        <div className="flex items-center gap-3 text-xl text-blue-700">
          <div className="card">
            <i className="fa-solid fa-credit-card cursor-pointer"></i>
          </div>
          <div className="calendar">
            <i className="fa-solid fa-calendar-days cursor-pointer"></i>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          </div>
        </div>
      </nav>

      <div className="flex rounded-full w-4/5 mx-auto  bg-gray-300 p-1.5 mt-2 justify-between gap-1">
        <div className="expenses w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/transactions/expenses"
            className="flex items-center justify-around "
          >
            <i className="fa-solid fa-arrow-up px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>EXPENSES</p>
          </NavLink>
        </div>
        <div className="income w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/transactions/income"
            className=" flex items-center  justify-around"
          >
            <i className="fa-solid fa-arrow-down px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>INCOME</p>
          </NavLink>
        </div>
      </div>

      {totalResult()}
      <div style={{height:"420px"}} className="cards overflow-auto">
        {arr.length === 0 ? (
          <div className="flex pt-6 items-center text-center text-gray-600 flex-col">
            <img className="w-48" src={image} alt="" />
            <p>No Any data for the selected period</p>
          </div>
        ) : (
          arr.map((debt, index) => (
            <TransactionsCard
              key={index}
              deleteTransaction={deleteTransaction}
              {...debt}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TransactionsIncome