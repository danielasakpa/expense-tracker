import React from 'react'
import { useInput } from '../context/InputProvider';

function IncomeExpenses() {
    const { income, expense } = useInput();

    return (
        <div className='inc-exp-container'>
            <div>
                <p>INCOME</p>
                <p className="money plus">$ {income}.00</p>
            </div>
            <div>
                <p>EXPENSE</p>
                <p className="money minus">$ {Math.abs(expense)}.00</p>
            </div>
        </div>
    )
}

export default IncomeExpenses