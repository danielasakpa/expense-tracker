import React from 'react'
import { useInput } from '../context/InputProvider';

function Transaction({ expense }) {
    const { deleteInput } = useInput();

    return (
        <li className={`${expense.amount < 0 ? "minus" : "plus"}`}>
            {expense.expenseName}
            <span >{expense.amount < 0 ? "-" : "+"} $ {Math.abs(expense.amount)}.00</span>
            <button className='delete-btn' onClick={deleteInput}>x</button>
        </li>
    )
}

export default Transaction