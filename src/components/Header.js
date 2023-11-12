import React from 'react'
import IncomeExpenses from './IncomeExpenses'
import { useInput } from '../context/InputProvider';

function Header() {

    const { income, expense } = useInput();

    return (
        <div>
            <h1>Expense Tracker</h1>
            <div className='container'>
                <h4>YOUR BALANCE</h4>
                <h1 className="money">$ {income - Math.abs(expense)}</h1>
            </div>
            <IncomeExpenses />
        </div>
    )
}

export default Header